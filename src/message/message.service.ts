import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
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

  async getRoomMessages(
    roomId: number,
    userId: number,
    page: number,
    pageSize: number,
  ): Promise<Message[]> {
    try {
      const reads = await this.messageRepository.find({
        where: {
          roomId,
          userId,
          unRead: true,
        },
      });
      Promise.all(
        reads.map(async (item) => {
          item.unRead = false;
          await this.messageRepository.save(item);
        }),
      );
      const query = this.messageRepository
        .createQueryBuilder('message')
        .leftJoinAndSelect('message.user', 'user')
        .where('message.roomId = :id', { id: roomId })
        .orderBy('message.createdAt', 'DESC');

      const skip = (page - 1) * pageSize;
      query.skip(skip).take(pageSize);
      const data = await query.getMany();
      return data.reverse();
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

  async getRoomsByUserId(userId: number) {
    try {
      const rooms = await this.roomMessageRepository
        .createQueryBuilder('room-message')
        .leftJoinAndSelect('room-message.userTwo', 'userTwo')
        .where('room-message.userOneId =:id', { id: userId })
        .select([
          'room-message',
          'userTwo.firstName',
          'userTwo.lastName',
          'userTwo.image',
        ])
        .getMany();
      const roomsWithUnreadCount = await Promise.all(
        rooms.map(async (room) => {
          const unreadCount = await this.messageRepository.count({
            where: {
              roomId: room.id,
              userId: userId,
              unRead: true,
            },
          });

          return { ...room, unreadCount };
        }),
      );

      return roomsWithUnreadCount;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }
  async getRoomsByAdminId(userId: number): Promise<RoomMessage[]> {
    try {
      const rooms = await this.roomMessageRepository
        .createQueryBuilder('room-message')
        .leftJoinAndSelect('room-message.userOne', 'userOne')
        .where('room-message.userTwoId =:id', { id: userId })
        .select([
          'room-message',
          'userOne.firstName',
          'userOne.lastName',
          'userOne.image',
        ])
        .getMany();
      const roomsWithUnreadCount = await Promise.all(
        rooms.map(async (room) => {
          const unreadCount = await this.messageRepository.count({
            where: {
              roomId: room.id,
              userId: userId,
              unRead: true,
            },
          });

          return { ...room, unreadCount };
        }),
      );

      return roomsWithUnreadCount;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }
  async markRead(id: number): Promise<void> {
    try {
      const read = await this.messageRepository.update(
        { id },
        { unRead: false },
      );
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }

  async unMarkRead(userId: number) {
    try {
      const query = this.roomMessageRepository
        .createQueryBuilder('room_message')
        .leftJoinAndSelect('room_message.messages', 'message')
        .where(
          '(room_message.userOneId = :userId AND message.userId = room_message.userTwoId AND message.unRead = :unRead) OR (room_message.userTwoId = :userId AND message.userId = room_message.userOneId AND message.unRead = :unRead) ',
          {
            userId: userId,
            unRead: true,
          },
        )
        .groupBy('room_message.id')
        .having('COUNT(message.id) > 0');

      const unreadMessageCount = await query.getCount();
      return unreadMessageCount;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }
}
