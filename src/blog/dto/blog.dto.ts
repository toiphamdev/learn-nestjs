import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;
  @ApiProperty({ required: false })
  shortDescription?: string;
  @ApiProperty({ required: false })
  subjectId?: string;
  @ApiProperty({ required: false })
  statusId?: string;
  @ApiProperty({ required: false })
  images?: string[];
  @ApiProperty({ required: false })
  contentMarkdown?: string;
  @ApiProperty({ required: false })
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
