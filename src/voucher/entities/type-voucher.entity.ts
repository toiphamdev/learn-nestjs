import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Voucher } from './voucher.entity';
import { Allcode } from 'src/allcode/entities/allcode.entity';
import { statusEnum } from 'src/allcode/allcode.enum';

@Entity()
export class TypeVoucher {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  typeVoucherCode: string;
  @ManyToOne(() => Allcode, (all) => all.typeVouchers)
  @JoinColumn({ name: 'typeVoucherCode', referencedColumnName: 'code' })
  typeVoucher: Allcode;
  @Column({ type: 'bigint' })
  value: number;
  @Column({ type: 'bigint' })
  maxValue: number;
  @Column({ type: 'bigint' })
  minValue: number;
  @OneToMany(() => Voucher, (voucher) => voucher.typeVoucher)
  voucher: Voucher[];
  @Column({ default: statusEnum.ACTIVE })
  statusId: statusEnum;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
