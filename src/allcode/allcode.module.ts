import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Allcode } from './entities/allcode.entity';
import { AllcodeController } from './allcode.controller';
import { AllcodeService } from './allcode.service';

@Module({
  imports: [TypeOrmModule.forFeature([Allcode])],
  controllers: [AllcodeController],
  providers: [AllcodeService],
})
export class AllcodeModule {}
