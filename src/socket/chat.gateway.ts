import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from '../message/message.service';
import { Message } from 'src/message/entities/message.entity';

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
    const roomMessages = await this.messageService.getRoomMessages(roomId);
    client.emit('roomMessages', roomMessages); // Gửi danh sách tin nhắn trong phòng cho người dùng

    // Lưu client.id và userId vào một bảng hash để theo dõi người dùng kết nối
    // Ví dụ: this.users[client.id] = userId;
  }

  @SubscribeMessage('message')
  async handleMessage(
    client: Socket,
    data: { userId: number; roomId: number; text: string },
  ) {
    // console.log(data, ack);
    const { userId, roomId, text } = data;
    // Xử lý khi một người dùng gửi tin nhắn
    const message = await this.messageService.createMessage(
      userId,
      roomId,
      text,
    );
    const messageReceived = await this.messageService.getAMessage(message.id);

    // // Gửi tin nhắn tới tất cả các người dùng trong phòng, ngoại trừ người gửi
    client.to(`room:${roomId}`).emit('message', messageReceived, () => {
      client.emit('messSent', messageReceived);
    });
  }
}
