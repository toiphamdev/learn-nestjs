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
import { MailService } from 'src/mail/mail.service';
import { AuthService } from 'src/auth/auth.service';
import { UserAddress } from './entities/user-address.entity';
import { statusEnum } from 'src/allcode/allcode.enum';
import { UserAddressDto } from './dto/user-address.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRespository: Repository<User>,
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,
    @InjectRepository(UserAddress)
    private readonly userAddRepo: Repository<UserAddress>,
    private readonly searchService: SearchService,
    private readonly voucherService: VoucherService,
    private readonly mailService: MailService,
    private readonly authService: AuthService,
  ) {}
  async createUser(user: UserDto): Promise<UserDto> {
    try {
      const password = bcrypt.hashSync(user.password, 10);
      user.password = password;
      user.createdAt = new Date();
      user.updatedAt = new Date();
      user.roleId = Role.USER;
      const savedUser: UserDto = await this.userRespository.save(user);
      delete savedUser.password;
      await this.searchService.indexUser(savedUser);
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
      let must = [];
      query.name
        ? (must = [{ match_phrase_prefix: { fullName: query.name } }])
        : query.roleId
        ? (must = [
            {
              match: {
                roleId: query.roleId,
              },
            },
          ])
        : (must = []);
      console.log(must);

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
        console.log(user);
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
      if (!voucher) {
        throw new Error('Voucher not found');
      }
      if (voucher.addToUserAmount == voucher.amount)
        throw new Error('This voucher is not available');
      const usedvoucher = await this.voucherService.getVoucherUsed(
        userId,
        voucher.id,
      );
      const user = await this.userRespository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.voucherList', 'voucherList')
        .where('user.id =:userId', { userId })
        .getOne();

      if (user.voucherList.some((v) => v.id === voucher.id)) {
        throw new Error('You added this voucher before!');
      }
      if (usedvoucher) {
        throw new Error('You already use this coupon');
      } else {
        user.voucherList.push(voucher);
        voucher.addToUserAmount += 1;
        await this.voucherService.updateAddToUserVoucherList(voucher);
        await this.userRespository.save(user);
      }
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
  async sendVerifyEmail(
    userEmail: string,
    type: 'EMAIL' | 'PASS',
    userName: string,
  ) {
    try {
      const token = this.authService.generateTokenEmail(userEmail);
      const update = await this.userRespository.update(
        { email: userEmail },
        { token: token },
      );
      if (update.affected > 0) {
        type === 'EMAIL'
          ? await this.mailService.sendEmailConfirm(userEmail, token, userName)
          : await this.mailService.sendEmailChangePass(
              userEmail,
              token,
              userName,
            );
        return { message: 'success' };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }
  async verifyEmail(token: string) {
    try {
      const decode = await this.authService.decode(token);
      const user = await this.userRespository.findOne({
        where: { email: decode.email },
      });
      if (token == user.token) {
        user.token = '';
        user.isActiveEmail = true;
        await this.userRespository.save(user);
        return {
          message: 'success',
        };
      } else {
        throw new Error('This token is not correct');
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }
  async isVerifyEmail(userId: number) {
    const user = await this.userRespository.findOne({
      where: { id: userId, isActiveEmail: true },
    });
    return user ? true : false;
  }

  async createAdd(address: UserAddressDto): Promise<{ message: string }> {
    try {
      address.createdAt = new Date();
      address.updatedAt = new Date();
      address.statusId = statusEnum.ACTIVE;
      const createdAdd = await this.userAddRepo.save(address);
      return { message: 'success' };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }
  async updateAdd(
    id: number,
    address: UserAddressDto,
  ): Promise<{ message: string }> {
    try {
      address.updatedAt = new Date();
      const updatedAdd = await this.userAddRepo.update(
        { id, userId: address.userId },
        address,
      );
      if (updatedAdd.affected > 0) {
        return { message: 'success' };
      } else {
        throw new Error('Not found');
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }
  async deleteAdd(id: number): Promise<{ message: string }> {
    try {
      const updatedAdd = await this.userAddRepo.update(
        { id },
        { statusId: statusEnum.DELETED },
      );
      if (updatedAdd.affected > 0) {
        return { message: 'success' };
      } else {
        throw new Error('Not found');
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }

  async getAddByUserId(userId: number): Promise<UserAddress[]> {
    try {
      const adds = await this.userAddRepo.find({
        where: { userId, statusId: statusEnum.ACTIVE },
      });
      return adds;
    } catch (error) {
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }
  async verifyPass(
    token: string,
    newPass: string,
  ): Promise<{ message: string }> {
    try {
      const decode = await this.authService.decode(token);
      const user = await this.userRespository.findOne({
        where: { email: decode.email },
      });
      if (token == user.token) {
        user.token = '';
        const password = bcrypt.hashSync(newPass, 10);
        user.password = password;
        await this.userRespository.save(user);
        return {
          message: 'success',
        };
      } else {
        throw new Error('This token is not correct');
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }

  async removeVoucher(id: number, userId: number) {
    try {
      const user = await this.userRespository.findOne({
        where: { id: userId },
      });
      const newVoucherList = user.voucherList.filter((voucher) => {
        return Number(voucher.id) !== Number(id);
      });
      user.voucherList = newVoucherList;
      await this.userRespository.save(user);
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Somethings went wrong!',
      );
    }
  }
}
