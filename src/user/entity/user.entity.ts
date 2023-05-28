import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Role } from './roles.enum';
import { UserAddress } from './user-address.entity';
import { Blog } from '../../blog/entity/blog.entity';
import { Comment } from '../../comment/entity/comment.entity';
import { VoucherUsed } from '../../voucher/entity/voucher-used.entity';
import { Message } from 'src/message/entity/message.entity';
import { RoomMessage } from 'src/message/entity/room-message.entity';
import { Receipt } from 'src/receipt/entity/reciept.entity';

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
  @Column()
  dob: string;
  @Column()
  statusId: string;
  @Column()
  token: string;
  @Column()
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
