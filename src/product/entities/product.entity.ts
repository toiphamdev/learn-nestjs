import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductDetail } from './product-detail.entity';
import { Comment } from '../../comment/entities/comment.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'text' })
  contentMarkdown: string;
  @Column({ type: 'text' })
  contentHtml: string;
  @Column()
  categoryId: string;
  @Column()
  statusId: string;
  @Column({ default: 0 })
  view: number;
  @Column({ nullable: true })
  madeBy: string;
  @Column({ nullable: true })
  material: string;
  @Column()
  brandId: string;
  @Column({ default: 0 })
  sold: number;
  @OneToMany(() => ProductDetail, (detail) => detail.product)
  detail: ProductDetail[];
  @OneToMany(() => Comment, (comment) => comment.product)
  comments: Comment[];
  @Column({ type: 'text', array: true })
  colors: string[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
