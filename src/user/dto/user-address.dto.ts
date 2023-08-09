import { IsNotEmpty } from 'class-validator';
import { statusEnum } from 'src/allcode/allcode.enum';

export class UserAddressDto {
  userId: number;
  @IsNotEmpty()
  shipName: string;
  statusId: statusEnum;
  @IsNotEmpty()
  shipAddress: string;
  @IsNotEmpty()
  shipPhoneNumber: string;
  shipEmail: string;
  createdAt: Date;
  updatedAt: Date;
}
