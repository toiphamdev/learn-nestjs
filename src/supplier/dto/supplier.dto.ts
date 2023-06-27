import { IsEmail, IsNotEmpty } from 'class-validator';

export class SupplierDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
