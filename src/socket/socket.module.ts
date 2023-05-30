import { Module } from '@nestjs/common';
import { MyGateway } from './socket.gateway';

@Module({
  providers: [MyGateway],
})
export class SocketModule {}
