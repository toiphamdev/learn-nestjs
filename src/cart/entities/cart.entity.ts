import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartDetail } from './cart-detail.entitty';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  userId: number;
  @OneToOne(() => User, (user) => user.cart)
  @JoinColumn({ name: 'userId' })
  user: User;
  @OneToMany(() => CartDetail, (detail) => detail.cart)
  detail: CartDetail;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
