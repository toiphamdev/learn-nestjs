import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRespository: Repository<User>,
  ) {}
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userRespository.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const checkPassword = await bcrypt.compareSync(password, user.password);
      if (checkPassword) {
        return user;
      } else {
        throw new UnauthorizedException('Something went wrong!');
      }
    } else {
      throw new UnauthorizedException('Something went wrong!');
    }
  }
}
