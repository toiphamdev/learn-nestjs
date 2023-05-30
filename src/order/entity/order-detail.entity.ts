import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.enitity';
import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Order, (order) => order.orderDetails)
  @JoinColumn()
  order: Order;
  @Column()
  orderId: number;
  @OneToOne(() => ProductDetailSize, (size) => size.orderDetail)
  productDetailSize: ProductDetailSize;
  @Column()
  productDetailSizeId: number;
  @Column()
  quantity: number;
}
