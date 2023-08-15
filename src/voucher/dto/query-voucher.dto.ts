import { statusEnum } from 'src/allcode/allcode.enum';

export interface QueryVoucherDto {
  page: number;
  size: number;
  typeVoucherId: number;
  userId: number;
  sortcreatedAt: 'DESC' | 'ASC';
  sortupdatedAt: 'DESC' | 'ASC';
  notDel: boolean;
  statusId: statusEnum;
}
