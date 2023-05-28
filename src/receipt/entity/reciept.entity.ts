import { User } from 'src/user/entity/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Supplier } from './supplier.entity';
import { ReceiptDetail } from './reciept-detail.entity';

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.receipts)
  user: User;
  @Column()
  userId: number;
  @ManyToOne(() => Supplier, (sup) => sup.receipts)
  supplier: Supplier;
  @Column()
  suplierId: number;
  @OneToMany(() => ReceiptDetail, (detail) => detail.receipt)
  receiptDetails: ReceiptDetail[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}