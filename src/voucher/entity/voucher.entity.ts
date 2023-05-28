import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeVoucher } from './type-voucher.entity';
import { Order } from '../../order/entity/order.enitity';

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
  @Column()
  usedAmount: number;
  @Column()
  codeVoucher: string;
  @OneToMany(() => Order, (order) => order.voucher)
  orders: Voucher[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
