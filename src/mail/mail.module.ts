import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // SMTP server của Gmail
        port: 465, // Cổng của SMTP server
        secure: true, // Sử dụng TLS
        auth: {
          user: process.env.GMAIL_APP_ACC, // Địa chỉ Gmail của bạn
          pass: process.env.GMAIL_APP_PASS, // Mật khẩu Gmail của bạn
        },
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
