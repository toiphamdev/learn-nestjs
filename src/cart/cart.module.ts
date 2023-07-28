import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartDetail } from './entities/cart-detail.entitty';
import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartDetail, ProductDetailSize])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
