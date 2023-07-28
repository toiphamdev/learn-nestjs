import { IsNotEmpty } from 'class-validator';

export class CartDetailDto {
  userId: number;
  cartId: number;
  @IsNotEmpty()
  productDetailSizeId: number;
  @IsNotEmpty()
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
