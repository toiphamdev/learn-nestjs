// database.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { DatabaseService } from './database.service';
import { Product } from '../product/entities/product.entity';
import { ProductDetail } from '../product/entities/product-detail.entity';
import { ProductImage } from '../product/entities/product-image.entity';
import { ProductDetailSize } from '../product/entities/product-detail-size.entity';
import { UserAddress } from '../user/entities/user-address.entity';
import { Allcode } from '../allcode/allcode.entity';
import { Banner } from '../banner/entities/banner.entity';
import { Comment } from '../comment/entities/comment.entity';
import { Blog } from '../blog/entities/blog.entity';
import { Voucher } from '../voucher/entities/voucher.entity';
import { VoucherUsed } from '../voucher/entities/voucher-used.entity';
import { TypeVoucher } from '../voucher/entities/type-voucher.entity';
import { Order } from '../order/entity/order.enitity';
import { TypeShip } from '../order/entity/type-ship.entity';
import { OrderDetail } from '../order/entity/order-detail.entity';
import { Message } from '../message/entities/message.entity';
import { RoomMessage } from '../message/entities/room-message.entity';
import { Receipt } from '../receipt/entities/reciept.entity';
import { Supplier } from '../receipt/entities/supplier.entity';
import { ReceiptDetail } from '../receipt/entities/reciept-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_USERPASSWORD,
      synchronize: true,
      entities: [
        User,
        Product,
        ProductDetail,
        ProductImage,
        ProductDetailSize,
        UserAddress,
        Allcode,
        Banner,
        Comment,
        Blog,
        Voucher,
        VoucherUsed,
        TypeVoucher,
        Order,
        TypeShip,
        OrderDetail,
        Message,
        RoomMessage,
        Receipt,
        Supplier,
        ReceiptDetail,
      ],
      autoLoadEntities: true,
      logging: true,
    }),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule implements OnModuleInit {
  onModuleInit() {
    console.log('Database connection has been established');
  }
}
