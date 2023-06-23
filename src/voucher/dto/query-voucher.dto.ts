export class QueryVoucherDto {
  page: number;
  size: number;
  typeVoucherId: number;
  sortcreatedAt: 'DESC' | 'ASC';
  sortupdatedAt: 'DESC' | 'ASC';
}
