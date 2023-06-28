export class SearchProductDto {
  page: number;
  size: number;
  name?: string;
  categoryId?: string;
  statusId?: string;
  colorCodes?: string | string[];
  brandId?: string;
  sortsold?: 'ASC' | 'DESC';
  sortcreatedAt?: 'ASC' | 'DESC';
  sortupdatedAt?: 'ASC' | 'DESC';
  fromPrice?: number;
  toPrice?: number;
  colors?: string[] | string;
}
