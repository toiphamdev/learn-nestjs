import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartDetail } from './entities/cart-detail.entitty';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartDetail])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
