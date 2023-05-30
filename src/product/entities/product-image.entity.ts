import {
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Entity,
  JoinColumn,
  BeforeRemove,
} from 'typeorm';
import { ProductDetail } from './product-detail.entity';
import * as fs from 'fs-extra';
import * as path from 'path';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @ManyToOne(() => ProductDetail, (productDetail) => productDetail.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'productDetailId' })
  productDetail: ProductDetail;
  @Column()
  productDetailId: number;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
  @BeforeRemove()
  async deleteImageFile(): Promise<void> {
    try {
      const imagePath = path.join(
        __dirname,
        '../public/uploads/images',
        this.name,
      );
      await fs.remove(imagePath);
      console.log(`Image ${this.name} has been deleted!`);
    } catch (error) {
      console.log(error);
    }
  }
}
