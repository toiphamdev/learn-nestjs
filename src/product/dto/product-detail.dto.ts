import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { ProductDetailSizeDto } from './product-detail-size.dto';

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
  @Expose()
  images: string[];
  description: string;
  @Expose()
  productDetailSize?: ProductDetailSizeDto[];
  createdAt: Date;
  updatedAt?: Date;
}
