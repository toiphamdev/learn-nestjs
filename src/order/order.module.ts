import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.enitity';
import { CartModule } from 'src/cart/cart.module';
import { OrderDetail } from './entity/order-detail.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderDetail]),
    CartModule,
    ProductModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
