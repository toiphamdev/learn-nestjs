import { IsNotEmpty } from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  addressUserId: number;
  statusId?: string;
  @IsNotEmpty()
  typeShipId?: number;
  voucherCode?: string;
  note?: string;
  isPaymentOnline: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
