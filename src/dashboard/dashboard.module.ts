import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Order } from 'src/order/entity/order.enitity';
import { Voucher } from 'src/voucher/entities/voucher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order, Voucher])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
