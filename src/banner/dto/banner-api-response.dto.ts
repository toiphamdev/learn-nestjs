import { ApiProperty } from '@nestjs/swagger';
import { Banner } from '../entities/banner.entity';

export class BannerApiResponseDto {
  @ApiProperty({ type: [Banner] })
  data: Banner[];

  @ApiProperty({
    example: {
      current: 1,
      size: 10,
      totalItems: 100,
    },
  })
  meta: {
    current: number;
    size: number;
    totalItems: number;
  };
}
