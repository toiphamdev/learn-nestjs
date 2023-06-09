import { IsNotEmpty } from 'class-validator';
import { ProductDetailDto } from './product-detail.dto';

export class CreatedProductDto {
  name: string;
  @IsNotEmpty()
  contentMarkdown: string;
  @IsNotEmpty()
  contentHtml: string;
  categoryId?: string;
  statusId?: string;
  detail?: ProductDetailDto[];
  view?: number;
  madeBy?: string;
  material?: string;
  brandId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
