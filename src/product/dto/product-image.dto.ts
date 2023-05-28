import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class ProductImageDto {
  id: number;
  @IsNotEmpty()
  productDetailId: number;
  @Expose()
  @IsNotEmpty()
  name: string;
}
