import { MailerService } from '@nestjs-modules/mailer';
import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmailWellcome(emailToSend: string) {
    try {
      const email = await this.mailerService.sendMail({
        to: emailToSend,
        from: 'TĐ Shop',
        subject: 'Wellcome to TĐ shop',
        template: 'welcome', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          // url: `${process.env.CLIENT_URL}/verify/${token}`,
          wellcomeImage: 'http://localhost:8080/wellcome.jpg',
          code: 'cf1a3f828287',
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
  async sendEmailConfirm(emailToSend: string, token: string, userName: string) {
    try {
      const email = await this.mailerService.sendMail({
        to: emailToSend,
        from: 'TĐ Shop',
        subject: 'Wellcome to TĐ shop',
        template: 'verify-email', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          // url: `${process.env.CLIENT_URL}/verify/${token}`,
          verificationUrl: `${process.env.CLIENT_URL}/verify/${token}`,
          username: userName,
        },
      });
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }

  async sendEmailChangePass(
    emailToSend: string,
    token: string,
    userName: string,
  ) {
    try {
      const email = await this.mailerService.sendMail({
        to: emailToSend,
        from: 'TĐ Shop',
        subject: 'Đổi mật khẩu',
        template: 'change-password', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          // url: `${process.env.CLIENT_URL}/verify/${token}`,
          verificationUrl: `${process.env.CLIENT_URL}/confirm/${token}`,
          username: userName,
        },
      });
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }

  async sendEmailTakePass(
    emailToSend: string,
    token: string,
    userName: string,
  ) {
    try {
      const email = await this.mailerService.sendMail({
        to: emailToSend,
        from: 'TĐ Shop',
        subject: 'Đổi mật khẩu',
        template: 'take-pas', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          // url: `${process.env.CLIENT_URL}/verify/${token}`,
          verificationUrl: `${process.env.CLIENT_URL}/confirm/${token}`,
          username: userName,
        },
      });
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }
}
