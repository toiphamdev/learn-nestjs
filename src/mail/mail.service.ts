import { MailerService } from '@nestjs-modules/mailer';
import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmailConfirm(emailToSend: string, token) {
    try {
      const email = await this.mailerService.sendMail({
        to: emailToSend,
        from: 'TĐfashion',
        subject: 'Confirm your email',
        template: 'welcome', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          url: `${process.env.CLIENT_URL}/verify/${token}`,
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      });
      return email;
      // return {
      //   message: 'success',
      // };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }
}
