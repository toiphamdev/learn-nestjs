import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entity/order.enitity';
import { CartService } from 'src/cart/cart.service';

import { CartDetail } from 'src/cart/entities/cart-detail.entitty';
import { OrderDetail } from './entity/order-detail.entity';
import { OrderDetailDto } from './dto/order-detail.dto';
import { OrderDto } from './dto/order.dto';
import { statusOrder } from 'src/allcode/allcode.enum';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderdetailRepo: Repository<OrderDetail>,
    private readonly productService: ProductService,
    private readonly cartService: CartService,
  ) {}

  async createOrder(userId: number, order: OrderDto) {
    try {
      const cart = await this.cartService.initCart(
        userId,
        order.voucherCode,
        order.typeShipId,
      );
      const cartDetails = cart.cart.detail as unknown as CartDetail[];
      const createOrder = this.orderRepo.create();
      createOrder.createdAt = new Date();
      createOrder.updatedAt = new Date();
      const orderDetails = cartDetails.map((item): OrderDetailDto => {
        return {
          orderId: createOrder.id,
          productDetailSizeId: item.productDetailSizeId,
          quantity: item.quantity,
        };
      });
      const data = this.orderdetailRepo.create(orderDetails);
      createOrder.orderDetails = data;
      createOrder.addressUserId = order.addressUserId;
      createOrder.typeShipId = cart.typeShipId;
      createOrder.isPaymentOnline = order.isPaymentOnline;
      createOrder.voucherId = cart.voucherId;
      createOrder.statusId = statusOrder.WAIT_FOR_COMFIRMATION;
      const result = await this.orderRepo.save(createOrder);
      if (result) {
        cartDetails.forEach(async (detail) => {
          await this.productService.updateSold(
            detail.productDetailSize.productDetail.productId,
            detail.quantity,
          );
        });
        await this.orderdetailRepo.save(data);
        await this.cartService.deleteCart(cart.cart);
      }
      return result;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
}
