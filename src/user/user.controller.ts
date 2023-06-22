import {
  Controller,
  Body,
  Post,
  Get,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/guard';
import { Request } from 'express';
import { SearchUsersDto } from './dto/search-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.createUser(user);
  }
  @Get()
  getAllUser(@Query() query: SearchUsersDto) {
    return this.userService.getAllUser(query);
  }
  @UseGuards(new JwtAuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req: Request) {
    const user = req.user;
    return this.userService.getProfile(user['id']);
  }
}
