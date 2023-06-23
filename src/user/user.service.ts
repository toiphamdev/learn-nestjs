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

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRespository: Repository<User>,
    private readonly searchService: SearchService,
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
}
