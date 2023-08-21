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
import { ApiProperty } from '@nestjs/swagger';
import { type } from 'os';

@Entity()
export class TypeShip {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  typeId: string;
  @ApiProperty({ type: () => Allcode })
  @ManyToOne(() => Allcode, (type) => type.typeShips)
  @JoinColumn({ name: 'typeId', referencedColumnName: 'code' })
  type: Allcode;
  @ApiProperty()
  @Column({ type: 'bigint' })
  price: number;
  @OneToMany(() => Order, (order) => order.typeShip)
  orders: Order[];
  @ApiProperty({ type: Date })
  @Column()
  createdAt: Date;
  @ApiProperty({ type: Date })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
