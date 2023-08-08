import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UserStatus } from './enum/auth.enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRespository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<User> {
    const user: User = await this.userRespository.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const checkPassword = bcrypt.compareSync(password, user.password);
      if (checkPassword) {
        user.statusId = UserStatus.ON;
        await this.userRespository.save(user);
        return user;
      } else {
        throw new UnauthorizedException('Something went wrong!');
      }
    } else {
      throw new UnauthorizedException('Something went wrong!');
    }
  }
  generateToken(email: string, id: number): string {
    const accessToken = this.jwtService.sign(
      { email, id },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.EX_TIME_ACCESS,
      },
    );
    return accessToken;
  }
  generateTokenEmail(email: string): string {
    const accessToken = this.jwtService.sign(
      { email },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.EX_TIME_VERIFY,
      },
    );
    return accessToken;
  }
  savedCookie(email: string, id: number, res: Response): void {
    const refreshToken = this.jwtService.sign(
      { email, id },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.EX_TIME_REFRESH,
      },
    );
    res.cookie('refreshToken', refreshToken, {
      maxAge: 12 * 3600 * 1000,
      httpOnly: true,
    });
  }
  clearCookie(res: Response): void {
    res.clearCookie('refreshToken');
  }

  async logout(userId: number, res: Response) {
    try {
      const updated = await this.userRespository.update(
        { id: userId },
        { statusId: UserStatus.OFF },
      );
      this.clearCookie(res);
      if (updated.affected > 0) {
        return res.json({
          message: 'success',
        });
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }
}
