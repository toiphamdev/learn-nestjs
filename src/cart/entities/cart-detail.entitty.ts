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
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CartDetail {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  cartId: number;
  @ApiProperty()
  @ManyToOne(() => Cart, (cart) => cart.detail, { onDelete: 'CASCADE' })
  cart: Cart;
  @ApiProperty({ type: ProductDetailSize })
  @ManyToOne(() => ProductDetailSize, (size) => size.cartDetail)
  @JoinColumn({ name: 'productDetailSizeId', referencedColumnName: 'id' })
  productDetailSize: ProductDetailSize;
  @ApiProperty({ type: Date })
  @Column()
  productDetailSizeId: number;
  @ApiProperty({ type: Date })
  @Column()
  quantity: number;
  @Column()
  @ApiProperty({ type: Date })
  createdAt: Date;
  @ApiProperty({ type: Date })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
