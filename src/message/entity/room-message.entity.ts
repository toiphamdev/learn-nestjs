import { User } from '../../user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}
