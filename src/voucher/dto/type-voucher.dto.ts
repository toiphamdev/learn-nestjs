import { IsNotEmpty } from 'class-validator';
import { VoucherMethod } from '../entities/voucher.enum';
import { statusEnum } from 'src/allcode/allcode.enum';

export class TypeVoucherDto {
  @IsNotEmpty()
  typeVoucherCode: VoucherMethod;
  @IsNotEmpty()
  value: number;
  @IsNotEmpty()
  maxValue: number;
  @IsNotEmpty()
  minValue: number;
  statusId: statusEnum;
  createdAt: Date;
  updatedAt: Date;
}
