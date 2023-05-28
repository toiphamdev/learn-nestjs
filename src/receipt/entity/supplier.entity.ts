import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Receipt } from './reciept.entity';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  email: string;
  @OneToMany(() => Receipt, (reciept) => reciept.supplier)
  receipts: Receipt[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
