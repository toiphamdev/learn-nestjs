import {
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Entity,
  JoinColumn,
} from 'typeorm';
import { ProductDetail } from './product-detail.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  src: string;
  @ManyToOne(() => ProductDetail, (productDetail) => productDetail.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'productDetailId' })
  productDetail: ProductDetail;
  @Column()
  productDetailId: number;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
