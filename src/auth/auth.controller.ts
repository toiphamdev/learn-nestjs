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
import {
  ApiBearerAuth,
  ApiBody,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  LoginDto,
  ResponseLoginDto,
  ResponseRereshTokenDto,
} from './dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'login user' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, type: ResponseLoginDto })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Post('login')
  @UseGuards(LocalAuthGuard)
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

  @ApiCookieAuth('refreshToken')
  @ApiOperation({ summary: 'Get access token when it was expried' })
  @ApiResponse({ status: 200, type: ResponseRereshTokenDto })
  @ApiForbiddenResponse({ description: 'Somethings went wrong' })
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

  @ApiOperation({ summary: 'User logout method' })
  @ApiBearerAuth()
  @Patch('/logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req: Request, @Res() res: Response) {
    const userId = req.user['id'];
    return this.authService.logout(userId, res);
  }
}
