import {
  Entity,
  Column,
  ObjectIdColumn,
  ObjectId,
  OneToOne,
  Relation,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Product, (product) => product.detail)
  product: Relation<Product>;
  @Column()
  name: string;
  @Column()
  originalPrice: number;
  @Column()
  discountPrice: number;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
