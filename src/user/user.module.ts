import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { SearchModule } from 'src/search/search.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), SearchModule],
  providers: [UserService, JwtAuthGuard],
  controllers: [UserController],
})
export class UserModule {}
