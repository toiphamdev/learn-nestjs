import { IsNotEmpty } from 'class-validator';
import { ProductDetailDto } from './product-detail.dto';
import { Allcode } from 'src/allcode/entities/allcode.entity';

export class ProductDto {
  id: number;
  @IsNotEmpty()
  name: string;
  contentMarkdown: string;
  contentHtml: string;
  categoryId?: string;
  statusId?: string;
  detail?: ProductDetailDto[];
  view?: number;
  colorCodes?: string[];
  colors: Allcode[];
  sold?: number;
  madeBy?: string;
  material?: string;
  brandId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
