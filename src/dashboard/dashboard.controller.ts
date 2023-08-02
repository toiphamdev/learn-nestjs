import { Controller, Get, Param, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DateQuery } from './dto/dashboard.dto';
import { query } from 'express';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  //user

  @Get('new-user')
  async getTotalUsers(@Query() query: DateQuery) {
    if (!query.startDate || !query.endDate) {
      const today = new Date();
      query.startDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
      );
      query.endDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
      );
    }
    return this.dashboardService.getTotalUsersInTimeRange(
      query.startDate,
      query.endDate,
    );
  }
  @Get('/total-user')
  getTotalUser() {
    return this.dashboardService.getCountUser();
  }
  @Get('user-online')
  getUserOnline() {
    return this.dashboardService.getCountUserOnline();
  }

  @Get('order')
  getOrder(
    @Query()
    query: {
      startDate: Date;
      endDate: Date;
      interval: 'year' | 'week' | 'month';
    },
  ) {
    return this.dashboardService.getRevenueByInterval(
      query.startDate,
      query.endDate,
      query.interval,
    );
  }
  @Get('product-sold')
  getProductSold(@Query() query: DateQuery) {
    return this.dashboardService.getProductSalesCountInTimeRange(
      query.startDate,
      query.endDate,
    );
  }
  @Get('count-order')
  getCountOrder(@Query() query: DateQuery) {
    return this.dashboardService.countOrderByTimeRange(
      query.startDate,
      query.endDate,
    );
  }
}
