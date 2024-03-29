import { Banner } from 'src/banner/entities/banner.entity';
import { Blog } from 'src/blog/entities/blog.entity';
import { Order } from 'src/order/entity/order.enitity';
import { TypeShip } from 'src/order/entity/type-ship.entity';
import { ProductDetail } from 'src/product/entities/product-detail.entity';
import { Product } from 'src/product/entities/product.entity';
import { UserAddress } from 'src/user/entities/user-address.entity';
import { User } from 'src/user/entities/user.entity';
import { TypeVoucher } from 'src/voucher/entities/type-voucher.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Allcode {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  value: string;
  @Column({ unique: true })
  code: string;
  @Column({ nullable: true })
  parentCode: string;
  @Column({ nullable: true })
  hexCode: string;
  @OneToMany(() => Product, (product) => product.status)
  statusProds: Product[];
  @OneToMany(() => Product, (product) => product.category)
  categoryProds: Product[];
  @OneToMany(() => Product, (product) => product.materialInfo)
  materialProds: Product[];
  @OneToMany(() => ProductDetail, (product) => product.color)
  productDetails: ProductDetail[];
  @OneToMany(() => Blog, (blog) => blog.subject)
  blogSubjects: Blog[];
  @OneToMany(() => Blog, (blog) => blog.status)
  blogStatus: Blog[];
  @OneToMany(() => Banner, (banner) => banner.status)
  banners: Banner[];
  @OneToMany(() => User, (user) => user.status)
  users: Banner[];
  @OneToMany(() => TypeVoucher, (type) => type.typeVoucher)
  typeVouchers: TypeVoucher[];
  @OneToMany(() => TypeShip, (type) => type.type)
  typeShips: TypeVoucher[];
  @OneToMany(() => UserAddress, (add) => add.status)
  statusAdds: UserAddress[];
  @OneToMany(() => Order, (order) => order.status)
  orderStatus: Order;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
