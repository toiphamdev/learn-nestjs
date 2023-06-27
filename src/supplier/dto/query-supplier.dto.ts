export class QuerySupplierDto {
  email?: string;
  name?: string;
  sortcreatedAt?: 'ASC' | 'DESC';
  sortupdatedAt?: 'ASC' | 'DESC';
  sortname?: 'ASC' | 'DESC';
  sortemail?: 'ASC' | 'DESC';
  size?: number;
  page?: number;
}
