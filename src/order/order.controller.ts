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
import { OrderApiResponseDto, OrderDto } from './dto/order.dto';
import { Role } from 'src/user/entities/roles.enum';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { ChangeStatusDto } from './dto/change-status.dto';
import { TypeShip } from './entity/type-ship.entity';
import { QueryOrderDto } from './dto/query-order.dto';
import { Order } from './entity/order.enitity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ResponseCommonDto } from 'src/allcode/dto/allcode-api-response.dto';

@ApiTags('Orders')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: 'User create new order ' })
  @ApiBody({ type: OrderDto })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Some things wwent wrong' })
  @ApiResponse({ status: 201, type: Order })
  @Post()
  @UseGuards(JwtAuthGuard)
  createOrder(
    @Req() req: Request,
    @Body()
    order: OrderDto,
  ): Promise<Order> {
    const userId = req.user['id'];
    return this.orderService.createOrder(userId, order, order.type);
  }

  @ApiOperation({ summary: 'Admin change status order' })
  @ApiBody({ type: ChangeStatusDto })
  @ApiParam({ type: Number, name: 'id' })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, type: ResponseCommonDto })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Some things wwent wrong' })
  @Patch('/change-status/:id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  changeorderStatus(
    @Body() body: ChangeStatusDto,
    @Param() param: { id: number },
  ): Promise<{ message: string }> {
    return this.orderService.updateStatusOrder(param.id, body.statusId);
  }

  @ApiOperation({ summary: 'User cancel order' })
  @ApiParam({ type: Number, name: 'id' })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, type: ResponseCommonDto })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Some things wwent wrong' })
  @Patch('cancel/:id')
  @UseGuards(JwtAuthGuard)
  cancelOrder(@Param() param: { id: number }, @Req() req: Request) {
    const userId = req.user['id'];
    return this.orderService.updateStatusOrderByUser(param.id, userId);
  }

  @ApiOperation({ summary: 'User get all type ship' })
  @ApiResponse({ status: 200, type: [TypeShip] })
  @ApiForbiddenResponse({ description: 'Somethings went wrong' })
  @Get('type-ship')
  getAllTypeShip(): Promise<TypeShip[]> {
    return this.orderService.getAllTypeShip();
  }

  @ApiOperation({ summary: 'User get order' })
  @ApiQuery({ type: QueryOrderDto })
  @ApiResponse({ status: 200, type: OrderApiResponseDto })
  @ApiForbiddenResponse({ description: 'Some things wwent wrong' })
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

  @ApiOperation({ summary: 'Get detail order' })
  @ApiParam({ type: Number, name: 'id' })
  @ApiResponse({ type: Order })
  @ApiForbiddenResponse({ description: 'Some things wwent wrong' })
  @Get('/:id')
  getOrderById(@Param('id') id: number): Promise<Order> {
    return this.orderService.getDetailInforOrder(id);
  }
}
