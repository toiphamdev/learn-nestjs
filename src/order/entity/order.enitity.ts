import { Voucher } from 'src/voucher/entities/voucher.entity';
import { UserAddress } from '../../user/entities/user-address.entity';
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
  @Column({ nullable: true })
  voucherId: number;
  @Column({ nullable: true })
  note: string;
  @Column({ default: false })
  isPaymentOnline: boolean;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
