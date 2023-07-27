import { User } from 'src/user/entities/user.entity';
import { Blog } from '../../blog/entities/blog.entity';
import { Product } from '../../product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  content: string;
  @Column({ type: 'text', nullable: true, array: true })
  images: string[];
  @Column({ nullable: true })
  parentId: number;
  @ManyToOne(() => Product, (prod) => prod.comments)
  @JoinColumn()
  product: Product;
  @Column({ nullable: true, type: 'int' })
  productId: number;
  @Column({ nullable: true })
  star: number;
  @ManyToOne(() => Blog, (blog) => blog.comments)
  @JoinColumn()
  blog: Blog;
  @Column({ nullable: true })
  blogId: number;
  @ManyToOne(() => User, (user) => user.comments)
  user: User;
  @Column()
  userId: number;
  @ManyToMany(() => User, (user) => user.likeCommentList, {
    onDelete: 'CASCADE',
  })
  likeList: User[];
  @ManyToMany(() => User, (user) => user.dislikeCommentList, {
    onDelete: 'CASCADE',
  })
  dislikeList: User[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
