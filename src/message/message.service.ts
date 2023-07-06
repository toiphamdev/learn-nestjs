import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { RoomMessage } from './entities/room-message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    @InjectRepository(RoomMessage)
    private readonly roomMessageRepository: Repository<RoomMessage>,
  ) {}

  async createMessage(
    userId: number,
    roomId: number,
    text: string,
  ): Promise<Message> {
    const message = this.messageRepository.create({
      userId,
      roomId,
      text,
    });
    return this.messageRepository.save(message);
  }

  async getMessagesByRoom(roomId: number): Promise<Message[]> {
    return this.messageRepository.find({ where: { roomId } });
  }

  async createRoomMessage(
    userOneId: number,
    userTwoId: number,
  ): Promise<RoomMessage> {
    const roomMessage = this.roomMessageRepository.create({
      userOneId,
      userTwoId,
    });
    return this.roomMessageRepository.save(roomMessage);
  }

  async getRoomMessages(roomId: number): Promise<RoomMessage> {
    return this.roomMessageRepository.findOne({
      where: { id: roomId },
      relations: ['messages'],
    });
  }
}
