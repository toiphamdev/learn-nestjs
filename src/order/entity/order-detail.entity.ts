import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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
  @ManyToOne(() => ProductDetailSize, (size) => size.orderDetail)
  productDetailSize: ProductDetailSize;
  @Column()
  productDetailSizeId: number;
  @Column()
  quantity: number;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
