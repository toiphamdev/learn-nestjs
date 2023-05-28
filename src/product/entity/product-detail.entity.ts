import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Product } from './product.entity';
import { ProductImage } from './product-image.entity';
import { ProductDetailSize } from './product-detail-size.entity';

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Product, (product) => product.detail, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ foreignKeyConstraintName: 'productId' })
  product: Product;
  @Column({ unique: true })
  productId: number;
  @OneToMany(() => ProductDetailSize, (size) => size.productDetail)
  size: ProductDetailSize[];
  @Column()
  name: string;
  @Column()
  originalPrice: number;
  @Column()
  discountPrice: number;
  @Column({ type: 'longtext' })
  description: string;
  @OneToMany(() => ProductImage, (image) => image.productDetail)
  images: ProductImage[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
