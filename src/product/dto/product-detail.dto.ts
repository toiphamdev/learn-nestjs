import { IsNotEmpty } from 'class-validator';

export class ProductDetailDto {
  @IsNotEmpty()
  productId: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  originalPrice: number;
  discountPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
