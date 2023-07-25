export class QueryCommentDto {
  productId?: number;
  page?: number;
  star?: number;
  size?: number;
  blogId?: number;
  sortcreatedAt?: 'ASC' | 'DESC';
}
