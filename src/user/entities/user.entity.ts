import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Role } from './roles.enum';
import { UserAddress } from './user-address.entity';
import { Blog } from '../../blog/entities/blog.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { VoucherUsed } from '../../voucher/entities/voucher-used.entity';
import { Message } from 'src/message/entities/message.entity';
import { RoomMessage } from 'src/message/entities/room-message.entity';
import { Receipt } from 'src/receipt/entities/reciept.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  password: string;
  @Column({ unique: true })
  email: string;
  @Column()
  genderId: string;
  @Column({ type: 'enum', enum: Role })
  roleId: Role;
  @Column()
  phoneNumber: string;
  @Column({ default: 'avatar.png' })
  image: string;
  @Column({ default: '19/5/2000' })
  dob?: string;
  @Column({ nullable: true })
  statusId: string;
  @Column({ nullable: true })
  token: string;
  @Column({ default: false })
  isActiveEmail: boolean;
  @OneToMany(() => UserAddress, (address) => address.user)
  address: UserAddress[];
  @OneToMany(() => Blog, (blog) => blog.user)
  blogs: Blog[];
  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
  @OneToMany(() => VoucherUsed, (voucher) => voucher.user)
  usedVouchers: VoucherUsed[];
  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];
  @OneToMany(() => RoomMessage, (room) => room.userOne)
  roomsAsUserOne: RoomMessage[];
  @OneToMany(() => RoomMessage, (room) => room.userTwo)
  roomsAsUserTwo: RoomMessage[];
  @OneToMany(() => Receipt, (receipt) => receipt.user)
  receipts: Receipt[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}