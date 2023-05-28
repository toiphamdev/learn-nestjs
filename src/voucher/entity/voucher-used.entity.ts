import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entity/user.entity';
@Entity()
export class VoucherUsed {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  voucherId: number;
  @ManyToOne(() => User, (user) => user.usedVouchers)
  user: User;
  @Column()
  userId: number;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
