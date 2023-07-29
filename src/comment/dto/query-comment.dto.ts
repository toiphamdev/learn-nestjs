export class QueryCommentDto {
  productId?: number;
  page?: number;
  star?: number;
  size?: number;
  blogId?: number;
  userId?: number;
  sortcreatedAt?: 'ASC' | 'DESC';
}
