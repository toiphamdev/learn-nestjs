import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMessage } from './entities/room-message.entity';
import { Message } from './entities/message.entity';
import { RoomMessageController } from './message.controller';

import { MessageService } from './message.service';

@Module({
  imports: [TypeOrmModule.forFeature([RoomMessage, Message])],
  controllers: [RoomMessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
