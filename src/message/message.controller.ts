import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './entities/message.entity';
import { RoomMessage } from './entities/room-message.entity';

@Controller('room-messages')
export class RoomMessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('create')
  async createRoomMessage(
    @Body('userOneId') userOneId: number,
    @Body('userTwoId') userTwoId: number,
  ): Promise<RoomMessage> {
    return this.messageService.createRoomMessage(userOneId, userTwoId);
  }

  @Post('message')
  async createMessage(
    @Body('userId') userId: number,
    @Body('roomId') roomId: number,
    @Body('text') text: string,
  ): Promise<Message> {
    return this.messageService.createMessage(userId, roomId, text);
  }

  @Get(':roomId')
  async getRoomMessages(@Param('roomId') roomId: number): Promise<RoomMessage> {
    return this.messageService.getRoomMessages(roomId);
  }
}
