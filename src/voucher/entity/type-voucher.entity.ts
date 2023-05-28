import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Voucher } from './voucher.entity';

@Entity()
export class TypeVoucher {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  typeVoucher: string;
  @Column({ type: 'bigint' })
  value: number;
  @Column({ type: 'bigint' })
  maxValue: number;
  @Column({ type: 'bigint' })
  minValue: number;
  @OneToMany(() => Voucher, (voucher) => voucher.typeVoucher)
  voucher: Voucher[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
