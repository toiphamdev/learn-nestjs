import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDetail } from './product-detail.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  contentMarkdown: string;
  @Column()
  contentHtml: string;
  @Column()
  categoryId: string;
  @Column()
  statusId: string;
  @Column()
  view: number;
  @Column()
  madeBy: string;
  @Column()
  material: string;
  @Column()
  brandId: string;
  @OneToOne(() => ProductDetail, (detail) => detail.product)
  detail: ProductDetail;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
