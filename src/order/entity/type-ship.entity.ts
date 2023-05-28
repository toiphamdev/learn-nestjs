import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.enitity';

@Entity()
export class TypeShip {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column({ type: 'bigint' })
  price: number;
  @OneToMany(() => Order, (order) => order.typeShip)
  orders: Order[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
