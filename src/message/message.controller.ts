import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './entities/message.entity';
import { RoomMessage } from './entities/room-message.entity';
import { JwtAuthGuard } from 'src/auth/guard';
import { Request } from 'express';

@Controller('room-messages')
export class RoomMessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  createRoomMessage(
    @Req() req: Request,
    @Body('userTwoId') userTwoId: number,
  ): Promise<RoomMessage> {
    return this.messageService.createRoomMessage(req?.user['id'], userTwoId);
  }

  @Post('message')
  @UseGuards(JwtAuthGuard)
  createMessage(
    @Body('roomId') roomId: number,
    @Body('text') text: string,
    @Req() req: Request,
  ): Promise<Message> {
    return this.messageService.createMessage(req.user['id'], roomId, text);
  }

  @Get('/rooms')
  @UseGuards(JwtAuthGuard)
  getAllRooms(@Req() req: Request) {
    const userId: number = req.user['id'];
    return this.messageService.getRoomsByUserId(userId);
  }
  @Get('/rooms-admin')
  @UseGuards(JwtAuthGuard)
  getAllAdminRooms(@Req() req: Request) {
    const userId: number = req.user['id'];
    return this.messageService.getRoomsByAdminId(userId);
  }

  @Get('/test')
  getCount(@Body() body: { userId: number }) {
    return this.messageService.unMarkRead(body.userId);
  }
}
