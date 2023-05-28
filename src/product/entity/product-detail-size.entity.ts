import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDetail } from './product-detail.entity';
import { OrderDetail } from 'src/order/entity/order-detail.entity';
import { ReceiptDetail } from 'src/receipt/entity/reciept-detail.entity';

@Entity()
export class ProductDetailSize {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  productDetailId: number;
  @ManyToOne(() => ProductDetail, (detail) => detail.size)
  @JoinColumn()
  productDetail: ProductDetail;
  @Column()
  width: string;
  @Column()
  height: string;
  @Column()
  weight: string;
  @OneToOne(() => OrderDetail, (detail) => detail.productDetailSize)
  orderDetail: OrderDetail;
  @OneToMany(() => ReceiptDetail, (detail) => detail.productDetailSize)
  receiptDetails: ReceiptDetail[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
