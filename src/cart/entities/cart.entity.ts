import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartDetail } from './cart-detail.entitty';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Cart {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column({ unique: true })
  userId: number;
  @ApiProperty()
  @OneToOne(() => User, (user) => user.cart)
  @JoinColumn({ name: 'userId' })
  user: User;
  @ApiProperty({ type: CartDetail })
  @OneToMany(() => CartDetail, (detail) => detail.cart)
  detail: CartDetail;
  @Column()
  @ApiProperty({ type: Date })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty({ type: Date })
  updatedAt: Date;
}
