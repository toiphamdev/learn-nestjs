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
import { VoucherUsed } from 'src/voucher/entities/voucher-used.entity';
import { UserService } from 'src/user/user.service';
import { Voucher } from 'src/voucher/entities/voucher.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderdetailRepo: Repository<OrderDetail>,
    @InjectRepository(VoucherUsed)
    private readonly voucherUsed: Repository<VoucherUsed>,
    @InjectRepository(Voucher)
    private readonly voucherRepo: Repository<Voucher>,
    private readonly productService: ProductService,
    private readonly cartService: CartService,
    private readonly userService: UserService,
  ) {}

  async createOrder(userId: number, order: OrderDto) {
    try {
      const verify = this.userService.isVerifyEmail(userId);
      if (!verify) {
        throw new Error('Please verify your email to create order');
      }
      const cart = await this.cartService.initCart(
        userId,
        order.voucherCode,
        order.typeShipId,
      );
      const cartDetails = cart.cart.detail as unknown as CartDetail[];
      if (cartDetails.length === 0) {
        throw new Error('No item in your cart');
      }

      const createOrder = this.orderRepo.create();
      createOrder.createdAt = new Date();
      createOrder.updatedAt = new Date();
      createOrder.addressUserId = order.addressUserId;
      createOrder.typeShipId = cart.typeShipId;
      createOrder.isPaymentOnline = order.isPaymentOnline;
      createOrder.voucherId = cart.voucherId;
      createOrder.statusId = statusOrder.WAIT_FOR_COMFIRMATION;

      const savedOrder = await this.orderRepo.save(createOrder); // Step 1: Save the order to get the orderId

      const orderDetails = cartDetails.map((item): OrderDetailDto => {
        return {
          orderId: savedOrder.id, // Step 2: Set the orderId for each orderDetail
          productDetailSizeId: item.productDetailSizeId,
          quantity: item.quantity,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      });

      const data = this.orderdetailRepo.create(orderDetails);
      savedOrder.orderDetails = data;

      const result = await this.orderRepo.save(savedOrder);

      if (result) {
        for (const detail of cartDetails) {
          await this.productService.updateSold(
            detail.productDetailSize.productDetail.productId,
            detail.quantity,
            detail.productDetailSizeId,
          );
        }
        await this.orderdetailRepo.save(data);
        if (result.voucherId) {
          const voucher = await this.voucherRepo.findOne({
            where: { id: result.voucherId },
          });
          voucher.usedAmount += 1;
          await this.voucherRepo.save(voucher);
          await this.voucherUsed.save({
            userId: userId,
            voucherId: result.voucherId,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
        await this.cartService.deleteCart(cart.cart);
      }

      return result;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Something went wrong!',
      );
    }
  }

  async updateStatusOrder(
    id: number,
    statusId: statusOrder,
  ): Promise<{ message: string }> {
    try {
      const updated = await this.orderRepo.update({ statusId }, { id });
      if (updated.affected > 0) {
        return {
          message: 'success',
        };
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Something went wrong!',
      );
    }
  }

  async updateStatusOrderByUser(
    id: number,
    userId: number,
  ): Promise<{ message: string }> {
    try {
      const order = await this.orderRepo
        .createQueryBuilder('order')
        .leftJoinAndSelect('order.addressUser', 'addressUser')
        .where('order.id =:id', { id })
        .getOne();
      if (userId == order.addressUser.userId) {
        order.statusId = statusOrder.CANCEL;
        await this.orderRepo.save(order);
        return {
          message: 'sucsess',
        };
      } else {
        throw new Error("This isn't your order");
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Something went wrong!',
      );
    }
  }
}
