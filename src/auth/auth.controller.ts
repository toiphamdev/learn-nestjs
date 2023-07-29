import {
  Controller,
  Req,
  Post,
  UseGuards,
  Res,
  Get,
  ForbiddenException,
  Patch,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard, LocalAuthGuard } from './guard';
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

  @Get('refresh')
  @UseGuards(new JwtCookieAuthGuard('jwt-cookie'))
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
  @Patch('/logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req: Request, @Res() res: Response) {
    const userId = req.user['id'];
    return this.authService.logout(userId, res);
  }
}
