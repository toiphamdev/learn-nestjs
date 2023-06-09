import {
  Controller,
  Req,
  Post,
  UseGuards,
  Res,
  Get,
  ForbiddenException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalAuthGuard } from './guard';
import { AuthService } from './auth.service';
import { plainToClass } from 'class-transformer';
import { UserDto } from 'src/user/dto/user.dto';
import { JwtCookieAuthGuard } from './guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request, @Res() res: Response) {
    try {
      const user = plainToClass(UserDto, req.user);
      const accessToken = this.authService.generateToken(user.email, user.id);
      this.authService.savedCookie(user.email, user.id, res);
      return res.status(200).json({
        accessToken,
        user,
      });
    } catch (error) {
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  @UseGuards(new JwtCookieAuthGuard('jwt-cookie'))
  @Get('refresh')
  getAccessToken(@Req() req: Request): { accessToken: string } {
    try {
      const user = plainToClass(UserDto, req.user);
      const accessToken = this.authService.generateToken(user.email, user.id);
      return {
        accessToken,
      };
    } catch (error) {
      throw new ForbiddenException('Something went wrong');
    }
  }
}
