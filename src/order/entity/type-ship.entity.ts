import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.enitity';
import { Allcode } from 'src/allcode/entities/allcode.entity';

@Entity()
export class TypeShip {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  typeId: string;
  @ManyToOne(() => Allcode, (type) => type.typeShips)
  @JoinColumn({ name: 'typeId', referencedColumnName: 'code' })
  type: Allcode;
  @Column({ type: 'bigint' })
  price: number;
  @OneToMany(() => Order, (order) => order.typeShip)
  orders: Order[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
