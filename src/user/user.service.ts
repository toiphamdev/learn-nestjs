import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { In, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { plainToClass } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { Role } from './entities/roles.enum';
import { SearchService } from 'src/search/search.service';
import slugify from 'slugify';
import { removeDiacritics } from 'src/utils/string.utils';
import { SearchUsersDto } from './dto/search-user.dto';
import { Comment } from 'src/comment/entities/comment.entity';
import { VoucherService } from 'src/voucher/voucher.service';
import e from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRespository: Repository<User>,
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
    private readonly searchService: SearchService,
    private readonly voucherService: VoucherService,
  ) {}
  async createUser(user: UserDto): Promise<UserDto> {
    try {
      const password = await bcrypt.hashSync(user.password, 10);
      user.password = password;
      user.createdAt = new Date();
      user.updatedAt = new Date();
      user.roleId = Role.USER;
      const savedUser: UserDto = await this.userRespository.save(user);
      delete savedUser.password;
      this.searchService.indexUser(savedUser);
      return plainToClass(UserDto, savedUser);
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(error?.errmsg);
    }
  }
  async getProfile(id: number): Promise<UserDto> {
    const user = await this.userRespository.findOneById(id);
    delete user.password;
    return plainToClass(UserDto, user);
  }
  async getAllUser(query: SearchUsersDto) {
    try {
      if (!query.page || !query.size) {
        query.page = 1;
        query.size = 10;
      }
      if (query.name) {
        const options = {
          lower: true, // Convert the slug to lowercase
          remove: /[*+~.()'"!:@]/g, // Remove special characters
          replacement: ' ', // Replace spaces with hyphens
        };
        const q = slugify(removeDiacritics(query.name.toLowerCase()), options);
        query.name = q;
      }
      const filler = [];
      if (query.statusId) {
        filler.push({ term: { statusId: query.statusId } });
      }
      const must = query.name
        ? [{ match_phrase_prefix: { fullName: query.name } }]
        : [];
      const sortedProperties = Object.entries(query).reduce(
        (result, [key, value]) => {
          if (key.startsWith('sort')) {
            const newKey = key.replace('sort', '');
            result.push({ [newKey]: { order: value.toLowerCase() } });
          }
          return result;
        },
        [],
      );
      const response = await this.searchService.searchUsers({
        from: (query.page - 1) * query.size, // Vị trí bắt đầu của trang
        size: query.size, // Số lượng kết quả trả về cho mỗi trang
        query: {
          bool: {
            must: must,
            filter: [...filler],
          },
        },
        sort: sortedProperties,
      });
      const totalHits = response.hits.total.valueOf();
      const userIds = response.hits.hits.map((item) => {
        const user = item._source as UserDto;
        return user.id;
      });
      if (userIds.length > 0) {
        const users = await this.userRespository
          .createQueryBuilder('user')
          .leftJoinAndSelect('user.status', 'status')
          .select(['user', 'status.code', 'status.value'])
          .where({ id: In(userIds) })
          .orderBy(
            `CASE user.id ${userIds
              .map((id, index) => `WHEN ${id} THEN ${index}`)
              .join(' ')} END`,
          )
          .getMany();

        const userEposes = [];
        for (const user of users) {
          userEposes.push(plainToClass(UserDto, user));
        }
        return {
          data: userEposes,
          meta: {
            current: query.page,
            size: query.size,
            totalItems: totalHits,
          },
        };
      } else {
        return {
          data: [],
          meta: {
            current: query.page,
            size: query.size,
            totalItems: totalHits,
          },
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(error?.errmsg);
    }
  }
  async likeComment(userId: number, commentId: number) {
    try {
      const comment = await this.commentRepo.findOne({
        where: { id: commentId },
      });
      const user = await this.userRespository.findOne({
        where: { id: userId },
        relations: ['likeCommentList', 'dislikeCommentList'],
      });
      if (user && comment) {
        // Check if comment already exists in likeCommentList
        const existingCommentIndex = user.likeCommentList.findIndex(
          (likedComment) => likedComment.id === comment.id,
        );

        if (existingCommentIndex !== -1) {
          // If comment already exists, remove it from the list
          user.likeCommentList.splice(existingCommentIndex, 1);
        } else {
          // If comment does not exist, add it to the list
          // Check if comment already exists in dislikeCommentList
          const existingDislikeIndex = user.dislikeCommentList.findIndex(
            (dislikedComment) => dislikedComment.id === comment.id,
          );

          if (existingDislikeIndex !== -1) {
            user.dislikeCommentList.splice(existingDislikeIndex, 1);
          }
          user.likeCommentList.push(comment);
        }
        await this.userRespository.save(user);
      }
      return { message: 'success' };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }
  async dislikeComment(userId: number, commentId: number) {
    try {
      const comment = await this.commentRepo.findOne({
        where: { id: commentId },
      });
      const user = await this.userRespository.findOne({
        where: { id: userId },
        relations: ['dislikeCommentList', 'likeCommentList'],
      });
      if (user && comment) {
        // Check if comment already exists in likeCommentList
        const existingCommentIndex = user.dislikeCommentList.findIndex(
          (dislikedComment) => dislikedComment.id === comment.id,
        );
        if (existingCommentIndex !== -1) {
          // If comment already exists, remove it from the list
          user.dislikeCommentList.splice(existingCommentIndex, 1);
        } else {
          // If comment does not exist, add it to the list
          const existingLikeIndex = user.likeCommentList.findIndex(
            (likedComment) => likedComment.id === comment.id,
          );

          if (existingLikeIndex !== -1) {
            user.likeCommentList.splice(existingLikeIndex, 1);
          }
          user.dislikeCommentList.push(comment);
        }
        await this.userRespository.save(user);
      }
      return { message: 'success' };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }
  async addToVoucherList(userId: number, voucherCode: string) {
    try {
      const voucher = await this.voucherService.getVoucherByCode(voucherCode);
      const usedvoucher = await this.voucherService.getVoucherUsed(
        userId,
        voucher.id,
      );
      const user = await this.userRespository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.voucherList', 'voucherList')

        .where('user.id =:userId', { userId })
        .getOne();

      if (usedvoucher) {
        throw new Error('You already use this coupon');
      } else {
        user.voucherList.push(voucher);
      }
      await this.userRespository.save(user);
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }
}
