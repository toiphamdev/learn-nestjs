import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../user/entities/user.entity'; // Thay thế đường dẫn thực tế đến User entity của bạn
import { Role } from '../../user/entities/roles.enum';
import { RegisterUserDto } from 'src/user/dto/register-user.dto';
import { Gender } from '../../user/entities/genders.enum';

@Injectable()
export class UserSeed {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async seed(): Promise<void> {
    const existingUsers = await this.userRepository.count();

    if (existingUsers === 0) {
      const users: RegisterUserDto[] = [
        {
          firstName: 'I am',
          lastName: 'admin',
          email: 'admin@gmail.com',
          password: '123456',
          roleId: Role.ADMIN,
          phoneNumber: '02020220',
          genderId: Gender.MALE,
          image: 'avatar.png',
          createdAt: new Date(),
        },
        {
          firstName: 'I am',
          lastName: 'user',
          email: 'user1@gmail.com',
          password: '123456',
          roleId: Role.USER,
          phoneNumber: '0202022330',
          genderId: Gender.MALE,
          image: 'avatar.png',
          createdAt: new Date(),
        },
      ];

      await this.userRepository.save(users);
      console.log('Seed data users created successfully.');
    } else {
      console.log('Seed data users already exists.');
    }
  }
}
