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
import { ApiProperty } from '@nestjs/swagger';
import { statusEnum, statusOrder } from 'src/allcode/allcode.enum';

@Entity()
export class Voucher {
  @ApiProperty({ type: Number, example: 1, description: 'Voucher id' })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    type: String,
    example: '30/7/2023',
    description: 'Voucher active from date',
  })
  @Column()
  fromDate: string;
  @ApiProperty({
    type: String,
    example: '30/8/2023',
    description: 'Voucher active to date',
  })
  @Column()
  toDate: string;
  @ApiProperty({
    type: TypeVoucher,
    example: new TypeVoucher(),
    description: 'Type of voucher',
  })
  @ManyToOne(() => TypeVoucher, (type) => type.voucher)
  typeVoucher: TypeVoucher;
  @ApiProperty({
    type: Number,
    example: 1,
    description: 'id of type voucher',
  })
  @Column()
  typeVoucherId: number;
  @ApiProperty({
    type: Number,
    example: 10,
    description: 'Total voucher can be used',
  })
  @Column()
  amount: number;
  @ApiProperty({
    type: Number,
    example: 2,
    description: "A count of user add voucher to user's voucherList",
  })
  @Column({ default: 0 })
  addToUserAmount: number;
  @ApiProperty({
    enum: statusEnum,
    example: statusEnum.ACTIVE,
    description: 'Status Id of voucher',
  })
  @Column({ default: 'DRAFT' })
  statusId: string;
  @ApiProperty({
    type: Number,
    example: 2,
    description: 'Total numer of vocher which user have to use',
  })
  @Column({ default: 0 })
  usedAmount: number;
  @ApiProperty({
    type: String,
    example: 'HOLIDAY',
    description: "Enter this code to use in user's order",
  })
  @Column()
  codeVoucher: string;
  @OneToMany(() => Order, (order) => order.voucher)
  orders: Voucher[];
  @ManyToMany(() => User, (user) => user.voucherList, {
    onDelete: 'CASCADE',
  })
  userList: User[];
  @ApiProperty({
    type: Date,
    example: new Date(),
    description: 'Voucher created at the date',
  })
  @Column()
  createdAt: Date;
  @ApiProperty({
    type: Date,
    example: new Date(),
    description: 'Voucher updated at the date',
  })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
