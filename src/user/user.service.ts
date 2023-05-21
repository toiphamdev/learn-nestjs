import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { Role, UserDto } from './dto/user.dto';
import { plainToClass } from 'class-transformer';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRespository: Repository<User>,
  ) {}
  async createUser(user: UserDto): Promise<UserDto> {
    try {
      const password = await bcrypt.hashSync(user.password, 10);
      user.password = password;
      user.createdAt = new Date();
      user.role = Role.USER;
      const savedUser: UserDto = await this.userRespository.save(user);
      delete savedUser.password;
      return plainToClass(UserDto, savedUser);
    } catch (error) {
      throw new ForbiddenException(error?.errmsg);
    }
  }
  async getUser(): Promise<User[]> {
    const user = await this.userRespository.find();
    return user;
  }
}
