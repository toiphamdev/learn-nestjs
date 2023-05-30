import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomMessage } from './entities/room-message.entity';
import { Message } from './entities/message.entity';
import { MessageController } from './message.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoomMessage, Message])],
  controllers: [MessageController],
})
export class MessageModule {}
