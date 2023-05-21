import { Controller, Req, Post, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { CustomAuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(CustomAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    console.log(req.body);
    return req.user;
  }
}
