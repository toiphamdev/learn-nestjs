import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class ProductDetailDto {
  @IsNotEmpty()
  productId: number;
  @Expose()
  @IsNotEmpty()
  name: string;
  @Expose()
  @IsNotEmpty()
  originalPrice: number;
  @Expose()
  discountPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
