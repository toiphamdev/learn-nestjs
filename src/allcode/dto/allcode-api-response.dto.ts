import { ApiProperty } from '@nestjs/swagger';
import { AllcodeDto } from './allcode.dto';

export class AllcodeApiResponseDto {
  @ApiProperty({ type: [AllcodeDto] })
  data: AllcodeDto[];

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

export class ResponseWithErrDto {
  @ApiProperty({ type: String })
  message: string;
  @ApiProperty({ type: Boolean })
  err: boolean;
}

export class ResponseCommonDto {
  @ApiProperty({ type: String })
  message: string;
}
