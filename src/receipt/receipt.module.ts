import { Module } from '@nestjs/common';
import { ReceiptController } from './receipt.controller';
import { ReceiptService } from './receipt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt } from './entities/reciept.entity';
import { ReceiptDetail } from './entities/reciept-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receipt, ReceiptDetail])],
  controllers: [ReceiptController],
  providers: [ReceiptService],
})
export class ReceiptModule {}
