import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { ProductDetail } from './product-detail.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Allcode } from 'src/allcode/entities/allcode.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'text', nullable: true })
  contentMarkdown: string;
  @Column({ type: 'text' })
  contentHtml: string;
  @Column({ nullable: true })
  categoryId: string;
  @ManyToOne(() => Allcode, (status) => status.categoryProds)
  @JoinColumn({ name: 'categoryId', referencedColumnName: 'code' })
  category: Allcode;
  @Column({ default: 'DRAFT' })
  statusId: string;
  @ManyToOne(() => Allcode, (status) => status.statusProds)
  @JoinColumn({ name: 'statusId', referencedColumnName: 'code' })
  status: Allcode;
  @Column({ default: 0 })
  view: number;
  @Column({ nullable: true })
  madeBy: string;
  @Column({ nullable: true })
  material: string;
  @Column({ nullable: true })
  brandId: string;
  @Column({ default: 0 })
  sold: number;
  @OneToMany(() => ProductDetail, (detail) => detail.product)
  detail: ProductDetail[];
  @OneToMany(() => Comment, (comment) => comment.product)
  comments: Comment[];
  @ManyToMany(() => Allcode)
  @JoinTable({
    name: 'product_colors',
    joinColumn: { name: 'product_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'color_code', referencedColumnName: 'code' },
  })
  colors: Allcode[];
  @Column({ nullable: true, type: 'real' })
  rating: number;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
