import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { statusOrder, statusUser } from 'src/allcode/allcode.enum';
import { Order } from 'src/order/entity/order.enitity';
import { User } from 'src/user/entities/user.entity';
import { Voucher } from 'src/voucher/entities/voucher.entity';
import { KindVoucher } from 'src/voucher/voucher.enum';
import { Between, In, Repository } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(Voucher)
    private readonly voucherRepo: Repository<Voucher>,
  ) {}

  async getTotalUsersInTimeRange(
    startDate: Date,
    endDate: Date,
  ): Promise<number> {
    try {
      return await this.userRepo.count({
        where: {
          createdAt: Between(startDate, endDate),
        },
      });
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }
  async getCountUser() {
    try {
      return await this.userRepo.count();
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }
  async getCountUserOnline() {
    try {
      return await this.userRepo.count({ where: { statusId: statusUser.ON } });
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  //order
  async calculateOrderRevenue(orderId: number): Promise<number> {
    const order = await this.orderRepo
      .createQueryBuilder('order')
      .where('order.id =:orderId', { orderId })
      .getOne();

    if (!order) {
      throw new Error('Order not found.');
    }

    return order.totalPrice;
  }
  async getRevenueByInterval(
    startDate: Date,
    endDate: Date,
    interval: 'year' | 'week' | 'month' | 'voucher',
  ): Promise<object> {
    try {
      const orders = await this.orderRepo.find({
        where: {
          createdAt: Between(startDate, endDate),
          statusId: In([statusOrder.DELIVERED, statusOrder.CANCEL]),
        },
        relations: [
          'orderDetails',
          'orderDetails.productDetailSize',
          'orderDetails.productDetailSize.productDetail',
          'voucher',
        ],
      });

      const revenueByInterval = {};

      await Promise.all(
        orders.map(async (order) => {
          const revenue = await this.calculateOrderRevenue(order.id);

          let intervalKey: string;
          switch (interval) {
            case 'year':
              intervalKey = `${order.createdAt.getFullYear()}`;
              break;
            case 'month':
              intervalKey = `${order.createdAt.getFullYear()}-${
                order.createdAt.getMonth() + 1
              }`;
              break;
            case 'week':
              intervalKey = `${order.createdAt.getFullYear()}-${
                order.createdAt.getMonth() + 1
              }-${order.createdAt.getDate()}`;
              break;
            case 'voucher':
              intervalKey = order?.voucher
                ? `${order?.voucher?.codeVoucher}`
                : null;
              break;
            default:
              intervalKey = `${order.createdAt.getFullYear()}-${
                order.createdAt.getMonth() + 1
              }-${order.createdAt.getDate()}`;
              break;
          }

          if (intervalKey) {
            if (!revenueByInterval[intervalKey]) {
              revenueByInterval[intervalKey] = 0;
            }

            revenueByInterval[intervalKey] += revenue;
          }
        }),
      );
      return revenueByInterval;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  async getProductSalesCountInTimeRange(
    startDate: Date,
    endDate: Date,
  ): Promise<any> {
    try {
      const orders = await this.orderRepo.find({
        where: {
          createdAt: Between(startDate, endDate),
          statusId: In([statusOrder.DELIVERED, statusOrder.CANCEL]),
        },
        relations: [
          'orderDetails',
          'orderDetails.productDetailSize',
          'orderDetails.productDetailSize.productDetail',
          'orderDetails.productDetailSize.productDetail.product',
        ],
      });

      const productSalesCount = {};

      orders.forEach((order) => {
        order.orderDetails.forEach((orderDetail) => {
          const productId =
            orderDetail.productDetailSize.productDetail.product.id;
          const productName =
            orderDetail.productDetailSize.productDetail.product.name;

          if (!productSalesCount[productId]) {
            productSalesCount[productId] = {
              productName: productName,
              salesCount: 0,
            };
          }

          productSalesCount[productId].salesCount += orderDetail.quantity;
        });
      });

      return Object.values(productSalesCount);
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  async countOrderByTimeRange(
    startDate: Date,
    endDate: Date,
  ): Promise<{ [status: string]: number }> {
    try {
      const orders = await this.orderRepo.find({
        where: {
          createdAt: Between(startDate, endDate),
        },
      });

      const orderCountByStatus = {};

      orders.forEach((order) => {
        const statusId = order.statusId; // Thay 'status' bằng trường chứa trạng thái đơn hàng trong model Order

        if (!orderCountByStatus[statusId]) {
          orderCountByStatus[statusId] = 0;
        }

        orderCountByStatus[statusId]++;
      });

      return orderCountByStatus;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong');
    }
  }
}
