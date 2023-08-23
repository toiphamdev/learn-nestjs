import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BannerDto {
  @ApiProperty()
  description?: string;
  @IsNotEmpty()
  @ApiProperty()
  name: string;
  @ApiProperty()
  statusId?: string;
  @ApiProperty()
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}
