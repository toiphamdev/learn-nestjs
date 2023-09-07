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
import { ApiProperty } from '@nestjs/swagger';
import { Allcode } from 'src/allcode/entities/allcode.entity';

@Entity()
export class Order {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ type: () => [UserAddress] })
  @ManyToOne(() => UserAddress, (address) => address.orders)
  addressUser: UserAddress;
  @ApiProperty()
  @Column()
  addressUserId: number;
  @ApiProperty()
  @Column()
  statusId: string;
  @ManyToOne(() => Allcode, (all) => all.orderStatus)
  status: Allcode;
  @ApiProperty({ type: TypeShip })
  @ManyToOne(() => TypeShip, (type) => type.orders)
  typeShip: TypeShip;
  @ApiProperty()
  @Column()
  typeShipId: number;
  @ApiProperty({ type: Voucher })
  @ManyToOne(() => Voucher, (voucher) => voucher.orders)
  voucher: Voucher;
  @ApiProperty({ type: [OrderDetail] })
  @OneToMany(() => OrderDetail, (detail) => detail.order)
  orderDetails: OrderDetail[];
  @ApiProperty()
  @Column({ nullable: true })
  voucherId: number;
  @ApiProperty()
  @Column({ default: 0 })
  totalPrice: number;
  @ApiProperty()
  @Column({ nullable: true })
  note: string;
  @ApiProperty()
  @Column({ default: false })
  isPaymentOnline: boolean;
  @ApiProperty({ type: Date })
  @Column()
  createdAt: Date;
  @ApiProperty({ type: Date })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
