import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { User } from 'src/user/entities/user.entity';
import { LocalStrategy } from './strategy';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';
import { JwtCookieStrategy } from './strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, JwtModule],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtCookieStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
