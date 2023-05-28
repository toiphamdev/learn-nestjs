// database.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { DatabaseService } from './database.service';
import { Product } from '../product/entity/product.entity';
import { ProductDetail } from '../product/entity/product-detail.entity';
import { ProductImage } from '../product/entity/product-image.entity';
import { ProductDetailSize } from '../product/entity/product-detail-size.entity';
import { UserAddress } from '../user/entity/user-address.entity';
import { Allcode } from '../allcode/allcode.entity';
import { Banner } from '../banner/entity/banner.entity';
import { Comment } from '../comment/entity/comment.entity';
import { Blog } from '../blog/entity/blog.entity';
import { Voucher } from '../voucher/entity/voucher.entity';
import { VoucherUsed } from '../voucher/entity/voucher-used.entity';
import { TypeVoucher } from '../voucher/entity/type-voucher.entity';
import { Order } from '../order/entity/order.enitity';
import { TypeShip } from '../order/entity/type-ship.entity';
import { OrderDetail } from '../order/entity/order-detail.entity';
import { Message } from '../message/entity/message.entity';
import { RoomMessage } from '../message/entity/room-message.entity';
import { Receipt } from '../receipt/entity/reciept.entity';
import { Supplier } from '../receipt/entity/supplier.entity';
import { ReceiptDetail } from '../receipt/entity/reciept-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'ecom',
      username: 'root',
      password: null,
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
