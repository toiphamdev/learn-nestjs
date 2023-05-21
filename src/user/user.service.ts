import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { ObjectId, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRespository: Repository<User>,
  ) {}
  async createUser(user: UserDto): Promise<User> {
    const savedUser = await this.userRespository.save(user);

    console.log(user.role);
    return savedUser;
  }
  async getUser(): Promise<User[]> {
    const user = await this.userRespository.find();
    return user;
  }
}
