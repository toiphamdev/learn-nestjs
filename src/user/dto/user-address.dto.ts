import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { statusEnum } from 'src/allcode/allcode.enum';

export class UserAddressDto {
  @ApiProperty()
  userId: number;
  @IsNotEmpty()
  @ApiProperty()
  shipName: string;
  @ApiProperty()
  statusId: statusEnum;
  @IsNotEmpty()
  @ApiProperty()
  shipAddress: string;
  @IsNotEmpty()
  @ApiProperty()
  shipPhoneNumber: string;
  @ApiProperty()
  shipEmail: string;
  createdAt: Date;
  updatedAt: Date;
}
