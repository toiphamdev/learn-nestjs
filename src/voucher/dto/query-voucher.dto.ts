export interface QueryVoucherDto {
  page: number;
  size: number;
  typeVoucherId: number;
  userId: number;
  sortcreatedAt: 'DESC' | 'ASC';
  sortupdatedAt: 'DESC' | 'ASC';
  notDel: boolean;
}
