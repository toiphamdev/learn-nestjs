import { IsNotEmpty } from 'class-validator';

export class ReceiptDetailDto {
  @IsNotEmpty()
  receiptId: number;
  @IsNotEmpty()
  productDetailSizeId: number;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  price: number;
  createdAt: Date;
  updatedAt?: Date;
}
