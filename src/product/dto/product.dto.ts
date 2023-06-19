import { IsNotEmpty } from 'class-validator';
import { ProductDetailDto } from './product-detail.dto';

export class ProductDto {
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  contentMarkdown: string;
  @IsNotEmpty()
  contentHtml: string;
  categoryId?: string;
  statusId?: string;
  detail?: ProductDetailDto[];
  view?: number;
  colors: string[];
  sold: number;
  madeBy?: string;
  material?: string;
  brandId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
