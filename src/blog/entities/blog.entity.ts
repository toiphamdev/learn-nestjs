import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';
@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text' })
  shortDescription: string;
  @Column()
  title: string;
  @Column()
  subjectId: string;
  @Column()
  statusId: string;
  @Column({ type: 'text', array: true })
  images: string[];
  @Column({ type: 'text' })
  contentMarkdown: string;
  @Column({ type: 'text' })
  contentHtml: string;
  @ManyToOne(() => User, (user) => user.blogs)
  user: User;
  @OneToMany(() => Comment, (comment) => comment.blog)
  comments: Comment[];
  @Column()
  userId: number;
  @Column()
  view: number;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
