import {
  Controller,
  Body,
  Post,
  Get,
  UseGuards,
  Req,
  Query,
  Patch,
  Param,
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
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req: Request) {
    const user = req.user;
    return this.userService.getProfile(user['id']);
  }
  @Patch('/comment/dislike/:commentId')
  @UseGuards(JwtAuthGuard)
  dislikeCommentAction(
    @Param() param: { commentId: number },
    @Req() req: Request,
  ) {
    const userId = req.user['id'];
    return this.userService.dislikeComment(userId, param.commentId);
  }
  @Patch('/comment/like/:commentId')
  @UseGuards(JwtAuthGuard)
  likeCommentAction(
    @Param() param: { commentId: number },
    @Req() req: Request,
  ) {
    const userId = req.user['id'];
    return this.userService.likeComment(userId, param.commentId);
  }

  @Patch('/voucher/add/:code')
  @UseGuards(JwtAuthGuard)
  addToVoucherList(
    @Param() param: { voucherCode: string },
    @Req() req: Request,
  ) {
    const userId = req.user['id'];
    return this.userService.addToVoucherList(userId, param.voucherCode);
  }
  @Post('/verify-email')
  @UseGuards(JwtAuthGuard)
  sendVerifyEmail(@Req() req: Request) {
    return this.userService.sendVerifyEmail(req?.user['email']);
  }
  @Patch('/verify/:token')
  verifyEmail(@Param() param: { token: string }) {
    return this.userService.verifyEmail(param.token);
  }
}
