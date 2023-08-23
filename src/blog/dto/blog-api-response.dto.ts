import { ApiProperty } from '@nestjs/swagger';
import { Blog } from '../entities/blog.entity';

export class BlogApiResponseDto {
  @ApiProperty({ type: [Blog] })
  data: Blog[];

  @ApiProperty({
    example: {
      current: 1,
      size: 10,
      totalItems: {
        items: 4,
      },
    },
  })
  meta: {
    current: number;
    size: number;
    totalItems: number;
  };
}
