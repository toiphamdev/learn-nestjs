export class VoucherDto {
  toDate: string;
  fromDate: string;
  typeVoucherId: number;
  amount: number;
  usedAmount?: number;
  codeVoucher: string;
  createdAt: Date;
  updatedAt: Date;
}
