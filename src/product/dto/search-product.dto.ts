export class SearchProductDto {
  page: number;
  size: number;
  name?: string;
  categoryId?: string;
  statusId?: string;
}
