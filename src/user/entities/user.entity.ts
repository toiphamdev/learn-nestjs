import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from './roles.enum';
import { UserAddress } from './user-address.entity';
import { Blog } from '../../blog/entities/blog.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { VoucherUsed } from '../../voucher/entities/voucher-used.entity';
import { Message } from 'src/message/entities/message.entity';
import { RoomMessage } from 'src/message/entities/room-message.entity';
import { Receipt } from 'src/receipt/entities/reciept.entity';
import { Allcode } from 'src/allcode/entities/allcode.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { Voucher } from 'src/voucher/entities/voucher.entity';
import { ApiProperty } from '@nestjs/swagger';
import { AllcodeDto } from 'src/allcode/dto/allcode.dto';
import { statusUser } from 'src/allcode/allcode.enum';

@Entity()
export class User {
  @ApiProperty({ type: Number, example: 1, description: 'User Id' })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({ type: String, example: 'Phạm', description: 'User firstname' })
  @Column()
  firstName: string;
  @ApiProperty({ type: String, example: 'Tới', description: 'User lastname' })
  @Column()
  lastName: string;
  @Column()
  password: string;
  @ApiProperty({
    type: String,
    example: 'toi@gmail.com',
    description: 'User email',
  })
  @Column({ unique: true })
  email: string;
  @ApiProperty({ type: String, example: 'MALE', description: 'User genderId' })
  @Column()
  genderId: string;
  @ApiProperty({ type: String, example: 'USER', description: 'User RoleId' })
  @Column({ type: 'enum', enum: Role })
  roleId: Role;
  @ApiProperty({
    type: String,
    example: '02838483',
    description: 'User phone number',
  })
  @Column()
  phoneNumber: string;
  @ApiProperty({
    type: String,
    example: 'avatar.png',
    description: 'User avatar',
  })
  @Column({ default: 'avatar.png' })
  image: string;
  @ApiProperty({
    type: String,
    example: '19/5/2000',
    description: 'User date of birth',
  })
  @Column({ default: '19/5/2000' })
  dob?: string;
  @ApiProperty({
    enum: statusUser,
    example: statusUser.ON,
    description: 'User statusId',
  })
  @Column({ default: 'OFF' })
  statusId: string;
  @ApiProperty({
    type: AllcodeDto,
    example: new AllcodeDto(),
    description: 'User status',
  })
  @ManyToOne(() => Allcode, (status) => status.users)
  @JoinColumn({ name: 'statusId', referencedColumnName: 'code' })
  status: Allcode;
  @ApiProperty({
    type: String,
    example: '2392uehp1901',
    description: 'User token',
  })
  @Column({ nullable: true })
  token: string;
  @ApiProperty({
    type: Boolean,
    example: false,
    description: 'User active email',
  })
  @Column({ default: false })
  isActiveEmail: boolean;
  @ApiProperty({
    type: [UserAddress],
    example: [new UserAddress()],
    description: 'User list address',
  })
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
  @OneToOne(() => Cart, (cart) => cart.user)
  cart: Cart;
  @ManyToMany(() => Comment, (comment) => comment.likeList)
  @JoinTable({
    name: 'likeList',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'commentId', referencedColumnName: 'id' },
  })
  likeCommentList: Comment[];
  @ManyToMany(() => Comment, (comment) => comment.dislikeList)
  @JoinTable({
    name: 'dislikeList',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'commentId', referencedColumnName: 'id' },
  })
  dislikeCommentList: Comment[];
  @ApiProperty({
    type: [Voucher],
    example: [new Voucher()],
    description: 'User list vouchers',
  })
  @ManyToMany(() => Voucher, (voucher) => voucher.userList)
  @JoinTable({
    name: 'voucherList',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'voucherId', referencedColumnName: 'id' },
  })
  voucherList: Voucher[];
  @ApiProperty({
    type: Date,
    example: new Date(),
    description: 'User created at the date',
  })
  @Column()
  createdAt: Date;
  @ApiProperty({
    type: Date,
    example: new Date(),
    description: 'User updated at the date',
  })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
