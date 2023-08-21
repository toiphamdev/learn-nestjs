import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Order } from '../entity/order.enitity';

enum typePayment {
  PAYMENT = 'PAYMENT',
  COD = 'COD',
}

export class OrderDto {
  @ApiProperty()
  @IsNotEmpty()
  addressUserId: number;
  @ApiProperty()
  statusId?: string;
  @ApiProperty()
  @IsNotEmpty()
  typeShipId?: number;
  @ApiProperty()
  voucherCode?: string;
  @ApiProperty()
  note?: string;
  @ApiProperty()
  isPaymentOnline: boolean;
  @ApiProperty({ enum: typePayment })
  type: typePayment;
  createdAt?: Date;
  updatedAt?: Date;
}

export class OrderApiResponseDto {
  @ApiProperty({ type: [Order] })
  data: Order[];

  @ApiProperty({
    example: {
      current: 1,
      size: 10,
      totalItems: 100,
    },
  })
  meta: {
    current: number;
    size: number;
    totalItems: number;
  };
}
