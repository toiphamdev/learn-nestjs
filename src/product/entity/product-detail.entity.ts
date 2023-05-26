import {
  Entity,
  Column,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Product } from './product.entity';
import { ProductImage } from './product-image.entity';

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Product, (product) => product.detail, { onDelete: 'CASCADE' })
  @JoinColumn({ foreignKeyConstraintName: 'productId' })
  product: Product;
  @Column({ unique: true })
  productId: number;
  @Column()
  name: string;
  @Column()
  originalPrice: number;
  @Column()
  discountPrice: number;
  @OneToMany(() => ProductImage, (image) => image.productDetail)
  images: ProductImage[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
