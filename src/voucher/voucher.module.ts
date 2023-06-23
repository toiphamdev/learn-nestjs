import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherController } from './voucher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { TypeVoucher } from './entities/type-voucher.entity';
import { VoucherUsed } from './entities/voucher-used.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voucher, TypeVoucher, VoucherUsed])],
  providers: [VoucherService],
  controllers: [VoucherController],
})
export class VoucherModule {}
