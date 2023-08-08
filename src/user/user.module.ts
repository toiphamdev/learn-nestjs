import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { SearchModule } from 'src/search/search.module';
import { Comment } from 'src/comment/entities/comment.entity';
import { VoucherModule } from 'src/voucher/voucher.module';
import { MailModule } from 'src/mail/mail.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Comment]),
    SearchModule,
    VoucherModule,
    MailModule,
    AuthModule,
  ],
  providers: [UserService, JwtAuthGuard],
  controllers: [UserController],
})
export class UserModule {}
