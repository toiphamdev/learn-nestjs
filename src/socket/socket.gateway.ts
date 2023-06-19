import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class MyGateway {
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    console.log('socket have been running');
    this.server.on('connection', (socket) => {
      console.log(`${socket.id} has been connected`);
    });
    this.server.on('disconnection', (socket) => {
      console.log(`${socket.id} has been díconnected`);
    });
  }
}
