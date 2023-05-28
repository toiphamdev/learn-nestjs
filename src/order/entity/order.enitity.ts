import { Voucher } from 'src/voucher/entity/voucher.entity';
import { UserAddress } from '../../user/entity/user-address.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeShip } from './type-ship.entity';
import { OrderDetail } from './order-detail.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => UserAddress, (address) => address.orders)
  addressUser: UserAddress;
  @Column()
  addressUserId: number;
  @Column()
  statusId: string;
  @ManyToOne(() => TypeShip, (type) => type.orders)
  typeShip: TypeShip;
  @Column()
  typeShipId: number;
  @ManyToOne(() => Voucher, (voucher) => voucher.orders)
  voucher: Voucher;
  @OneToMany(() => OrderDetail, (detail) => detail.order)
  orderDetails: OrderDetail[];
  @Column()
  voucherId: number;
  @Column()
  note: string;
  @Column()
  isPaymentOnline: boolean;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
