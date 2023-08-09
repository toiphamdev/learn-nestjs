import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { SearchModule } from 'src/search/search.module';
import { Comment } from 'src/comment/entities/comment.entity';
import { VoucherModule } from 'src/voucher/voucher.module';
import { MailModule } from 'src/mail/mail.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserAddress } from './entities/user-address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Comment, UserAddress]),
    SearchModule,
    VoucherModule,
    MailModule,
    AuthModule,
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
