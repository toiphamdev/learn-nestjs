import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import 'dotenv/config';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { AllcodeModule } from './allcode/allcode.module';
import { UploadModule } from './upload/upload.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ClearImageModule } from './clear-image/clear-image.module';
import { ClearImageService } from './clear-image/clear-image.service';
@Module({
  imports: [
    MulterModule.register(),
    AuthModule,
    UserModule,
    DatabaseModule,
    ProductModule,
    AllcodeModule,
    UploadModule,
    ScheduleModule.forRoot(),
    ClearImageModule,
  ],
  controllers: [AppController],
  providers: [AppService, ClearImageService],
})
export class AppModule {}
