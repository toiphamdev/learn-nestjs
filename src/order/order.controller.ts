import {
  Controller,
  Post,
  Req,
  UseGuards,
  Body,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { JwtAuthGuard } from 'src/auth/guard';
import { Request } from 'express';
import { OrderDto } from './dto/order.dto';
import { Role } from 'src/user/entities/roles.enum';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { ChangeStatusDto } from './dto/change-status.dto';
import { TypeShip } from './entity/type-ship.entity';
import { QueryOrderDto } from './dto/query-order.dto';
import { Order } from './entity/order.enitity';

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
    return this.orderService.createOrder(userId, order, order.type);
  }

  @Patch('/change-status/:id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  changeorderStatus(
    @Body() body: ChangeStatusDto,
    @Param() param: { id: number },
  ) {
    return this.orderService.updateStatusOrder(param.id, body.statusId);
  }

  @Patch('cancel/:id')
  @UseGuards(JwtAuthGuard)
  cancelOrder(@Param() param: { id: number }, @Req() req: Request) {
    const userId = req.user['id'];
    return this.orderService.updateStatusOrderByUser(param.id, userId);
  }
  @Get('type-ship')
  getAllTypeShip(): Promise<TypeShip[]> {
    return this.orderService.getAllTypeShip();
  }
  @Get()
  getAllOrder(@Query() query: QueryOrderDto): Promise<{
    data: Order[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    return this.orderService.getAllOrder(query);
  }
}
