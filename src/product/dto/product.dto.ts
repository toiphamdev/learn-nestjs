import { IsNotEmpty } from 'class-validator';
import { ProductDetailDto } from './product-detail.dto';

export class ProductDto {
  id: number;
  @IsNotEmpty()
  name: string;
  contentMarkdown?: string;
  contentHtml?: string;
  categoryId?: string;
  statusId?: string;
  detail?: ProductDetailDto;
  view?: number;
  madeBy?: string;
  material?: string;
  brandId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
