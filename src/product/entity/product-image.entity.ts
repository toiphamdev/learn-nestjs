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
  name: string;
  @ManyToOne(() => ProductDetail, (productDetail) => productDetail.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'productDetailId' })
  productDetail: ProductDetail;
  @Column()
  productDetailId: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
