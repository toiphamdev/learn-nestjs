import { User } from '../../user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class RoomMessage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userOneId: number;

  @Column()
  userTwoId: number;

  @ManyToOne(() => User, (user) => user.roomsAsUserOne)
  userOne: User;

  @ManyToOne(() => User, (user) => user.roomsAsUserTwo)
  userTwo: User;
  @OneToMany(() => Message, (mes) => mes.room)
  messages: Message[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
