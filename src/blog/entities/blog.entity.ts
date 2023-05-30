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
  @Column({ type: 'longtext' })
  shortDescription: string;
  @Column()
  title: string;
  @Column()
  subjectId: string;
  @Column()
  statusId: string;
  @Column()
  image: string;
  @Column({ type: 'longtext' })
  contentMarkdown: string;
  @Column({ type: 'longtext' })
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
