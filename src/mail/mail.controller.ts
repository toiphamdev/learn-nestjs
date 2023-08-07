import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send-confirm-email')
  sendEmailConfirm(@Body('email') email: string) {
    return this.mailService.sendEmailConfirm(email);
  }
}
