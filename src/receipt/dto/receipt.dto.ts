import { IsNotEmpty } from 'class-validator';

export class ReceiptDto {
  @IsNotEmpty()
  supplierId: number;
  createdAt?: Date;
  updatedAt?: Date;
}
