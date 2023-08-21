import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { statusOrder } from 'src/allcode/allcode.enum';

export class ChangeStatusDto {
  @ApiProperty({ enum: statusOrder })
  @IsNotEmpty()
  statusId: statusOrder;
}
