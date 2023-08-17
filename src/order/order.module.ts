import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.enitity';
import { CartModule } from 'src/cart/cart.module';
import { OrderDetail } from './entity/order-detail.entity';
import { ProductModule } from 'src/product/product.module';
import { VoucherUsed } from 'src/voucher/entities/voucher-used.entity';
import { UserModule } from 'src/user/user.module';
import { Voucher } from 'src/voucher/entities/voucher.entity';
import { TypeShip } from './entity/type-ship.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderDetail,
      VoucherUsed,
      Voucher,
      TypeShip,
    ]),
    CartModule,
    ProductModule,
    UserModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
