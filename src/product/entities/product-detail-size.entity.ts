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
import { ReceiptDetail } from 'src/receipt/entities/reciept-detail.entity';
import { CartDetail } from 'src/cart/entities/cart-detail.entitty';

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
  name: string;
  @Column({ default: 0 })
  quantity: number;
  @Column()
  width: number;
  @Column()
  height: number;
  @Column()
  weight: number;
  @OneToMany(() => OrderDetail, (detail) => detail.productDetailSize)
  orderDetail: OrderDetail[];
  @OneToMany(() => CartDetail, (detail) => detail.productDetailSize)
  cartDetail: CartDetail[];
  @OneToMany(() => ReceiptDetail, (detail) => detail.productDetailSize)
  receiptDetails: ReceiptDetail[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
