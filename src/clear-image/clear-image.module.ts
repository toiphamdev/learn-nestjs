import { Module } from '@nestjs/common';
import { ClearImageService } from './clear-image.service';

@Module({
  providers: [ClearImageService],
})
export class ClearImageModule {}
