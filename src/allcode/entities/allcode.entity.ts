import { Banner } from 'src/banner/entities/banner.entity';
import { Blog } from 'src/blog/entities/blog.entity';
import { ProductDetail } from 'src/product/entities/product-detail.entity';
import { Product } from 'src/product/entities/product.entity';
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
  @OneToMany(() => Product, (product) => product.status)
  products: Product[];
  @OneToMany(() => ProductDetail, (product) => product.color)
  productDetails: ProductDetail[];
  @OneToMany(() => Blog, (blog) => blog.subject)
  blogSubjects: Blog[];
  @OneToMany(() => Blog, (blog) => blog.status)
  blogStatus: Blog[];
  @OneToMany(() => Banner, (banner) => banner.status)
  banners: Banner[];
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
