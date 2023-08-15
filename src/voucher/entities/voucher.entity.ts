import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeVoucher } from './type-voucher.entity';
import { Order } from '../../order/entity/order.enitity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Voucher {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fromDate: string;
  @Column()
  toDate: string;
  @ManyToOne(() => TypeVoucher, (type) => type.voucher)
  typeVoucher: TypeVoucher;
  @Column()
  typeVoucherId: number;
  @Column()
  amount: number;
  @Column({ default: 0 })
  addToUserAmount: number;
  @Column({ default: 'DRAFT' })
  statusId: string;
  @Column({ default: 0 })
  usedAmount: number;
  @Column()
  codeVoucher: string;
  @OneToMany(() => Order, (order) => order.voucher)
  orders: Voucher[];
  @ManyToMany(() => User, (user) => user.voucherList, {
    onDelete: 'CASCADE',
  })
  userList: User[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
