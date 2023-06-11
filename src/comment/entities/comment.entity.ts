import { User } from 'src/user/entities/user.entity';
import { Blog } from '../../blog/entities/blog.entity';
import { Product } from '../../product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  content: string;
  @Column()
  image: string;
  @Column()
  parenId: number;
  @ManyToOne(() => Product, (prod) => prod.comments)
  @JoinColumn()
  product: Product;
  @Column({ nullable: true })
  productId: number;
  @Column()
  start: number;
  @ManyToOne(() => Blog, (blog) => blog.comments)
  @JoinColumn()
  blog: Blog;
  @Column({ nullable: true })
  blogId: number;
  @ManyToOne(() => User, (user) => user.comments)
  user: User;
  @Column()
  userId: number;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
