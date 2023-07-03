import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../user/entities/user.entity'; // Thay thế đường dẫn thực tế đến User entity của bạn
import { Role } from '../../user/entities/roles.enum';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { Gender } from '../../user/entities/genders.enum';
import * as bcrypt from 'bcrypt';
import { SearchService } from 'src/search/search.service';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class UserSeed {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly searchService: SearchService,
  ) {}

  async seed(): Promise<void> {
    const existingUsers = await this.userRepository.count();
    const password = await bcrypt.hashSync('123456', 10);
    if (existingUsers === 0) {
      const users: RegisterUserDto[] = [
        {
          firstName: 'I am',
          lastName: 'admin',
          email: 'admin@gmail.com',
          password: password,
          roleId: Role.ADMIN,
          statusId: 'OFF',
          phoneNumber: '02020220',
          genderId: Gender.MALE,
          image: 'avatar.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'I am',
          lastName: 'user',
          statusId: 'OFF',
          email: 'user1@gmail.com',
          password: password,
          roleId: Role.USER,
          phoneNumber: '0202022330',
          genderId: Gender.MALE,
          image: 'avatar.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      for (const user of users) {
        const createdUser: UserDto = await this.userRepository.save(user);
        delete createdUser.password;
        this.searchService.indexUser(createdUser);
      }
      console.log('Seed data users created successfully.');
    } else {
      console.log('Seed data users already exists.');
    }
  }
}
