import { IsNotEmpty } from 'class-validator';

export class CartDetailDto {
  @IsNotEmpty()
  userId: number;
  @IsNotEmpty()
  cartId: number;
  @IsNotEmpty()
  productDetailSizeId: number;
  @IsNotEmpty()
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
