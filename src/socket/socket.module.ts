import { Module } from '@nestjs/common';
import { MyGateway } from './socket.gateway';
import { ChatGateway } from './chat.gateway';

import { MessageModule } from 'src/message/message.module';

@Module({
  imports: [MessageModule],
  providers: [MyGateway, ChatGateway],
  exports: [MyGateway],
})
export class SocketModule {}
