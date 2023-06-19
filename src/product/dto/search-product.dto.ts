export class SearchProductDto {
  page: number;
  size: number;
  name?: string;
  categoryId?: string;
  statusId?: string;
  color?: string | string[];
  brandId?: string;
  sold?: 'ASC' | 'DESC';
  createdAt?: 'ASC' | 'DESC';
  fromPrice?: number;
  toPrice?: number;
  colors?: string[] | string;
}
