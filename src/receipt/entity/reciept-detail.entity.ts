import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Receipt } from './reciept.entity';
import { ProductDetailSize } from 'src/product/entity/product-detail-size.entity';

@Entity()
export class ReceiptDetail {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Receipt, (rec) => rec.receiptDetails)
  receipt: Receipt;
  @Column()
  receiptId: number;
  @ManyToOne(() => ProductDetailSize, (size) => size.receiptDetails)
  productDetailSize: ProductDetailSize;
  @Column()
  productDetailSizeId: number;
  @Column()
  quantity: number;
  @Column({ type: 'bigint' })
  price: number;
  @Column()
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
