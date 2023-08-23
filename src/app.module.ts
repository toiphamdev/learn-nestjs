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
import { BannerModule } from './banner/banner.module';
import { CommentModule } from './comment/comment.module';
import { BlogModule } from './blog/blog.module';
import { VoucherModule } from './voucher/voucher.module';
import { OrderModule } from './order/order.module';
import { MessageModule } from './message/message.module';
import { ReceiptModule } from './receipt/receipt.module';
import { SocketModule } from './socket/socket.module';
import { SearchModule } from './search/search.module';
import { ConfigModule } from '@nestjs/config';
import { SupplierModule } from './supplier/supplier.module';
import { CartModule } from './cart/cart.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MailModule } from './mail/mail.module';
import { PaymentModule } from './payment/payment.module';
import { SwaggerController, SwaggerService } from './swagger.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MulterModule.register(),
    AuthModule,
    UserModule,
    DatabaseModule,
    ProductModule,
    AllcodeModule,
    UploadModule,
    ScheduleModule.forRoot(),
    ClearImageModule,
    BannerModule,
    CommentModule,
    BlogModule,
    VoucherModule,
    OrderModule,
    MessageModule,
    ReceiptModule,
    SocketModule,
    SearchModule,
    SupplierModule,
    CartModule,
    DashboardModule,
    MailModule,
    PaymentModule,
    // LikeListModule,
  ],
  controllers: [AppController, SwaggerController],
  providers: [AppService, ClearImageService, SwaggerService],
})
export class AppModule {}
