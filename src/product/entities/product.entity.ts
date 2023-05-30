import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductDetail } from './product-detail.entity';
import { Comment } from '../../comment/entities/comment.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'longtext' })
  contentMarkdown: string;
  @Column({ type: 'longtext' })
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
  @OneToMany(() => ProductDetail, (detail) => detail.product)
  detail: ProductDetail[];
  @OneToMany(() => Comment, (comment) => comment.product)
  comments: Comment[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
