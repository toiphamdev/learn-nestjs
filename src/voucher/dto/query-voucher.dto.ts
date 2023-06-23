export class QueryVoucherDto {
  page: number;
  size: number;
  typeVoucherId: number;
  createdAt: 'DESC' | 'ASC';
  updatedAt: 'DESC' | 'ASC';
}
