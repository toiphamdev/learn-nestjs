import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from '../message/message.service';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messageService: MessageService) {}

  async handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  async handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
    // Xử lý khi một người dùng ngắt kết nối, ví dụ xóa client.id khỏi danh sách người dùng kết nối
  }

  @SubscribeMessage('join')
  async handleJoin(client: Socket, data: { userId: number; roomId: number }) {
    const { userId, roomId } = data;
    // Xử lý khi một người dùng tham gia vào cuộc hội thoại
    client.join(`room:${roomId}`); // Tham gia vào phòng với roomId cụ thể
    const roomMessages = await this.messageService.getRoomMessages(
      roomId,
      userId,
      1,
      10,
    );
    client.emit('roomMessages', roomMessages); // Gửi danh sách tin nhắn trong phòng cho người dùng
  }

  @SubscribeMessage('message')
  async handleMessage(
    client: Socket,
    data: {
      userIdSend: number;
      userIdReceive: number;
      roomId: number;
      text: string;
    },
  ) {
    // console.log(data, ack);
    const { userIdSend, userIdReceive, roomId, text } = data;
    // Xử lý khi một người dùng gửi tin nhắn
    const message = await this.messageService.createMessage(
      userIdSend,
      roomId,
      text,
    );
    const messageReceived = await this.messageService.getAMessage(message.id);
    const totalRoomUnRead = await this.messageService.unMarkRead(userIdReceive);
    this.server.emit('unReadMark', { userId: userIdSend, totalRoomUnRead });
    // // Gửi tin nhắn tới tất cả các người dùng trong phòng, ngoại trừ người gửi
    client.to(`room:${roomId}`).emit('message', messageReceived, () => {
      client.emit('messSent', messageReceived);
    });
  }

  @SubscribeMessage('read')
  async markRead(data: { id: number }) {
    const read = await this.messageService.markRead(data.id);
    console.log(read);
  }

  @SubscribeMessage('typing')
  handleOntyping(
    client: Socket,
    data: { userId: number; roomId: number; typing: boolean },
  ) {
    const { userId, roomId, typing } = data;
    console.log(typing);
    client.to(`room:${roomId}`).emit('typing', { userId, typing });
  }

  @SubscribeMessage('unReadCheck')
  async handleUnReadCheck(client: Socket, data: { userId: number }) {
    const totalRoomUnRead = await this.messageService.unMarkRead(data.userId);
    client.emit('unReadMark', { userId: data.userId, totalRoomUnRead });
  }
}
