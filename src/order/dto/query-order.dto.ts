import { statusOrder } from 'src/allcode/allcode.enum';

type sort = 'ASC' | 'DESC';

export interface QueryOrderDto {
  statusId: statusOrder;
  userId: number;
  sortcreatedAt: sort;
  sortupdatedAt: sort;
  sorttotalPrice: sort;
  page: number;
  size: number;
}
