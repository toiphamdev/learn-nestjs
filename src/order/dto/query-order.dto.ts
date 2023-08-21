import { ApiProperty } from '@nestjs/swagger';
import { statusOrder } from 'src/allcode/allcode.enum';

type sort = 'ASC' | 'DESC';

export class QueryOrderDto {
  @ApiProperty({ enum: statusOrder, required: false })
  statusId: statusOrder;
  @ApiProperty({ required: false })
  userId: number;
  @ApiProperty({ required: false })
  sortcreatedAt: sort;
  @ApiProperty({ required: false })
  sortupdatedAt: sort;
  @ApiProperty({ required: false })
  sorttotalPrice: sort;
  @ApiProperty({ required: false })
  page: number;
  @ApiProperty({ required: false })
  size: number;
}
