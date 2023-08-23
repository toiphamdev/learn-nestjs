import { ApiProperty } from '@nestjs/swagger';

export class SearchBlogDto {
  @ApiProperty({ required: false })
  page?: number;
  @ApiProperty({ required: false })
  size?: number;
  @ApiProperty({ required: false })
  name?: string;
  @ApiProperty({ required: false })
  statusId?: string;
  @ApiProperty({ required: false })
  subjectId?: string;
  @ApiProperty({ required: false })
  notDel?: boolean;
}
