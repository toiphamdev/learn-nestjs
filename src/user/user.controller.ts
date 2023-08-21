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
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto, UserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/guard';
import { Request } from 'express';
import { SearchUsersDto } from './dto/search-user.dto';
import { UserAddressDto } from './dto/user-address.dto';
import { type } from 'os';

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
  addToVoucherList(@Param() param: { code: string }, @Req() req: Request) {
    const userId = req.user['id'];
    return this.userService.addToVoucherList(userId, param.code);
  }
  @Post('/verify-email')
  @UseGuards(JwtAuthGuard)
  sendVerifyEmail(@Req() req: Request) {
    return this.userService.sendVerifyEmail(
      req?.user['email'],
      'EMAIL',
      `${req?.user['firstName']} ${req?.user['lastName']}`,
    );
  }
  @Post('/change-pass')
  @UseGuards(JwtAuthGuard)
  sendVerifyChangePass(@Req() req: Request) {
    return this.userService.sendVerifyEmail(
      req?.user['email'],
      'PASS',
      `${req?.user['firstName']} ${req?.user['lastName']}`,
    );
  }
  @Patch('/verify')
  verifyEmail(@Body('token') token: string) {
    return this.userService.verifyEmail(token);
  }

  @Patch('/change-pass')
  verifyPass(@Body('token') token: string, @Body('newPass') newPass: string) {
    return this.userService.verifyPass(token, newPass);
  }

  @Post('/address')
  @UseGuards(JwtAuthGuard)
  createAdd(@Body() add: UserAddressDto, @Req() req: Request) {
    add.userId = req.user['id'];
    return this.userService.createAdd(add);
  }
  @Put('/address/:id')
  @UseGuards(JwtAuthGuard)
  updateAdd(
    @Body() add: UserAddressDto,
    @Req() req: Request,
    @Param('id') id: number,
  ) {
    add.userId = req.user['id'];
    return this.userService.updateAdd(id, add);
  }
  @Delete('/address/:id')
  @UseGuards(JwtAuthGuard)
  deleteAdd(@Param('id') id: number) {
    return this.userService.deleteAdd(id);
  }
  @Get('/address')
  @UseGuards(JwtAuthGuard)
  getAdds(@Req() req: Request) {
    const userId = req.user['id'];
    return this.userService.getAddByUserId(userId);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  updateUser(@Body() user: UpdateUserDto, @Req() req: Request) {
    user.email = req.user['email'];
    return this.userService.updateUser(user);
  }

  @Post('/take-pass')
  sendVerifyTakePass(@Body('email') email: string) {
    return this.userService.sendTakePassEmail(email);
  }
}
