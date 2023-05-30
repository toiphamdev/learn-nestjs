import { Controller, Get } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  //   @Post('send')
  //   sendMessage(){
  //     return  this.mesGateway.handleSendMessage()
  //   }
}
