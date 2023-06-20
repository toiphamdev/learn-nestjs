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
  @Column({ type: 'text', nullable: true })
  shortDescription: string;
  @Column()
  title: string;
  @Column({ nullable: true })
  subjectId: string;
  @Column({ default: 'DRAFT' })
  statusId: string;
  @Column({ type: 'text', array: true, nullable: true })
  images: string[];
  @Column({ type: 'text', nullable: true })
  contentMarkdown: string;
  @Column({ type: 'text', nullable: true })
  contentHtml: string;
  @ManyToOne(() => User, (user) => user.blogs)
  user: User;
  @OneToMany(() => Comment, (comment) => comment.blog)
  comments: Comment[];
  @Column()
  userId: number;
  @Column({ default: 0 })
  view: number;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
