import { ForbiddenException, Injectable } from '@nestjs/common';
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
    try {
      const message = this.messageRepository.create({
        userId,
        roomId,
        text,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return this.messageRepository.save(message);
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }

  async getMessagesByRoom(roomId: number): Promise<Message[]> {
    try {
      return await this.messageRepository.find({
        where: { roomId },
        order: { createdAt: 'ASC' },
      });
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }

  async createRoomMessage(
    userOneId: number,
    userTwoId: number,
  ): Promise<RoomMessage> {
    try {
      const roomMessage = this.roomMessageRepository.create({
        userOneId,
        userTwoId,
        updatedAt: new Date(),
        createdAt: new Date(),
      });
      return await this.roomMessageRepository.save(roomMessage);
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }

  async getRoomMessages(roomId: number): Promise<RoomMessage> {
    try {
      return await this.roomMessageRepository
        .createQueryBuilder('room_message')
        .leftJoinAndSelect('room_message.messages', 'message')
        .leftJoinAndSelect('message.user', 'user')
        .where('room_message.id = :id', { id: roomId })
        .orderBy('createdAt', 'ASC')
        .getOne();
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }
  async getAMessage(id: number): Promise<Message> {
    try {
      return await this.messageRepository
        .createQueryBuilder('message')
        .leftJoinAndSelect('message.user', 'user')
        .where('message.id =:id', { id })
        .getOne();
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }

  async getRoomsByUserId(userId: number): Promise<RoomMessage[]> {
    try {
      const rooms = await this.roomMessageRepository.find({
        where: {
          userOneId: userId,
        },
        order: { createdAt: 'DESC' },
      });
      return rooms;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }
}
