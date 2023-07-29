export class OrderDto {
  addressUserId: number;
  statusId: string;
  typeShipId: number;
  voucherId: number;
  note: string;
  isPaymentOnline: boolean;
  createdAt: Date;
  updatedAt: Date;
}
