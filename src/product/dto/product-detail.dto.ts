import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ProductDetailSizeDto } from './product-detail-size.dto';

export class ProductDetailDto {
  @IsNotEmpty()
  productId: number;
  @Expose()
  @IsNotEmpty()
  name: string;
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  originalPrice: number;
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  discountPrice: number;
  @Expose()
  images: string[];
  description: string;
  colorId?: string;
  @Expose()
  productDetailSize?: ProductDetailSizeDto[];
  createdAt: Date;
  updatedAt?: Date;
}
