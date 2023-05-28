import { User } from 'src/user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'longtext' })
  text: string;
  @ManyToOne(() => User, (user) => user.messages)
  user: User;
  @Column()
  userId: number;
  @Column()
  roomId: number;
  @Column({ default: true })
  unRead: boolean;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
