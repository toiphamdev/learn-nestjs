import { User } from 'src/user/entity/user.entity';
import { Blog } from '../../blog/entity/blog.entity';
import { Product } from '../../product/entity/product.entity';
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
  @Column('longtext')
  content: string;
  @Column()
  image: string;
  @Column()
  parenId: number;
  @ManyToOne(() => Product, (prod) => prod.comment)
  @JoinColumn()
  product: Product;
  @Column()
  productId: number;
  @ManyToOne(() => Blog, (blog) => blog.comments)
  @JoinColumn()
  blog: Blog;
  @Column()
  blogId: number;
  @ManyToOne(() => User, (user) => user.comments)
  user: User;
  @Column()
  userId: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
