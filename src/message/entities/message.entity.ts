import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoomMessage } from './room-message.entity';

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
  @ManyToOne(() => RoomMessage, (room) => room.messages)
  room: RoomMessage;
  @Column()
  roomId: number;
  @Column({ default: true })
  unRead: boolean;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
