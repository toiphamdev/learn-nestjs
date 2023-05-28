import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Order } from '../../order/entity/order.enitity';

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.address)
  @JoinColumn()
  user: User;
  @Column()
  userId: number;
  @Column()
  shipName: string;
  @Column()
  shipAddress: string;
  @Column()
  shipPhoneNumber: string;
  @Column()
  shipEmail: string;
  @OneToMany(() => Order, (order) => order.addressUser)
  orders: Order[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
