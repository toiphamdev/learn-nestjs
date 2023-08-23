import { ApiProperty } from '@nestjs/swagger';
enum sort {
  DESC = 'DESC',
  ASC = 'ASC',
}
export class QueryBannerDto {
  @ApiProperty({ required: false })
  statusId?: string;
  @ApiProperty({ required: false })
  page?: number;
  @ApiProperty({ required: false })
  size?: number;
  @ApiProperty({ required: false, enum: sort })
  updatedAt?: sort;
}
