import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { ObjectId, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

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
  generateToken(email: string, id: number): string {
    const accessToken = this.jwtService.sign(
      { email, id },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '30m',
      },
    );
    const refreshToken = this.jwtService.sign(
      { email, id },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '1d',
      },
    );
    return accessToken;
  }
  savedCookie(email: string, id: number, res: Response): void {
    const refreshToken = this.jwtService.sign(
      { email, id },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '1d',
      },
    );
    res.cookie('refreshToken', refreshToken, {
      maxAge: 12 * 3600 * 1000,
      httpOnly: true,
    });
  }
}
