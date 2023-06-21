import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';
import { Allcode } from 'src/allcode/entities/allcode.entity';
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
  @ManyToOne(() => Allcode, (subject) => subject.blogSubjects)
  @JoinColumn({ name: 'subjectId', referencedColumnName: 'code' })
  subject: Allcode;
  @Column({ default: 'DRAFT' })
  statusId: string;
  @ManyToOne(() => Allcode, (subject) => subject.blogStatus)
  @JoinColumn({ name: 'statusId', referencedColumnName: 'code' })
  status: Allcode;
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
