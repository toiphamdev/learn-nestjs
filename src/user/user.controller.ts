import { Controller, Body, Post, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { Request } from 'express';
import { Roles } from '../auth/decorator/roles.decorator';
import { Role } from './entities/roles.enum';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.createUser(user);
  }
  @Get()
  getAllUser() {
    return this.userService.getUser();
  }
  @UseGuards(new JwtAuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req: Request) {
    const user = req.user;
    return this.userService.getProfile(user['id']);
  }
}
