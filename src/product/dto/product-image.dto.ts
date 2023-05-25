import { IsNotEmpty } from 'class-validator';

export class ProductImageDto {
  id: number;
  @IsNotEmpty()
  productDetailId: number;
  @IsNotEmpty()
  src: string;
}
