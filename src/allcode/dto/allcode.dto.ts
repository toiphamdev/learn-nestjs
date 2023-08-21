import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AllcodeDto {
  @IsNotEmpty()
  @ApiProperty({ required: true, type: String })
  type: string;
  @IsNotEmpty()
  @ApiProperty({ required: true, type: String })
  value: string;
  @ApiProperty({ type: String })
  code?: string;
  @ApiProperty({ type: String })
  parentCode?: string;
  @ApiProperty({ type: String })
  hexCode?: string;
  createdAt: Date;
  updatedAt?: Date;
}
