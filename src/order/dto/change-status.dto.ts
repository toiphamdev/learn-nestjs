import { IsNotEmpty } from 'class-validator';
import { statusOrder } from 'src/allcode/allcode.enum';

export class ChangeStatusDto {
  @IsNotEmpty()
  statusId: statusOrder;
}
