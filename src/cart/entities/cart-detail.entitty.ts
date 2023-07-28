import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';

@Entity()
export class CartDetail {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  cartId: number;
  @ManyToOne(() => Cart, (cart) => cart.detail, { onDelete: 'CASCADE' })
  cart: Cart;
  @ManyToOne(() => ProductDetailSize, (size) => size.cartDetail)
  @JoinColumn({ name: 'productDetailSizeId', referencedColumnName: 'id' })
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
