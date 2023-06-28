import { Module } from '@nestjs/common';
import { ReceiptController } from './receipt.controller';
import { ReceiptService } from './receipt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt } from './entities/reciept.entity';
import { ReceiptDetail } from './entities/reciept-detail.entity';
import { ReceiptDetailService } from './receipt-detail.service';
import { SocketModule } from 'src/socket/socket.module';
import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Receipt, ReceiptDetail, ProductDetailSize]),
    SocketModule,
  ],
  controllers: [ReceiptController],
  providers: [ReceiptService, ReceiptDetailService],
})
export class ReceiptModule {}
