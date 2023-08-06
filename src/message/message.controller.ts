import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
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
  createMessage(
    @Body('userId') userId: number,
    @Body('roomId') roomId: number,
    @Body('text') text: string,
  ): Promise<Message> {
    return this.messageService.createMessage(userId, roomId, text);
  }

  @Get(':roomId')
  getRoomMessages(@Param('roomId') roomId: number): Promise<RoomMessage> {
    return this.messageService.getRoomMessages(roomId);
  }

  @Get('/rooms')
  @UseGuards(JwtAuthGuard)
  getAllRooms(@Req() req: Request) {
    return this.messageService.getRoomsByUserId(req.user['id']);
  }
}
