import { Controller, Post, Req, UseGuards, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { JwtAuthGuard } from 'src/auth/guard';
import { Request } from 'express';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createOrder(
    @Req() req: Request,
    @Body()
    order: OrderDto,
  ) {
    const userId = req.user['id'];
    return this.orderService.createOrder(userId, order);
  }
}
