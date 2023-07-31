import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartDetail } from './entities/cart-detail.entitty';
import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';
import { User } from 'src/user/entities/user.entity';
import { VoucherModule } from 'src/voucher/voucher.module';
import { TypeShip } from 'src/order/entity/type-ship.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cart,
      CartDetail,
      ProductDetailSize,
      User,
      TypeShip,
    ]),
    VoucherModule,
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
