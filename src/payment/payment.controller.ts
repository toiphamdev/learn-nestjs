// payment.controller.ts
import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  Get,
  Render,
  Query,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Request, Response } from 'express';
import { Payment } from './payment.dto';

function extractIPv4(ip) {
  // Kiểm tra xem ip có phải là địa chỉ IPv6 loopback (::1) không
  if (ip === '::1') {
    return '127.0.0.1';
  }

  // Kiểm tra xem ip có chứa địa chỉ IPv6 hay không
  const matchIPv6 = ip.match(/^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/);
  if (matchIPv6) {
    return '127.0.0.1'; // Chuyển đổi địa chỉ IPv6 loopback sang IPv4 loopback
  }

  // Kiểm tra và trích xuất địa chỉ IPv4
  const matchIPv4 = ip.match(/(?:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}))/);
  return matchIPv4 ? matchIPv4[0] : null;
}

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('create_payment_url')
  @Render('order')
  async paymentDisplay(
    @Query() query: { orderId: number },
    @Res() res: Response,
  ) {
    const result = await this.paymentService.displayCreatePayment(
      query.orderId,
      res,
    );
    return result;
  }
  @Post('create_payment_url')
  async createPaymentUrl(
    @Body() body: Payment,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const ipAddr =
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress;

    const ipv4Addr = extractIPv4(ipAddr);

    const paymentUrl = this.paymentService.createPaymentUrl(body, ipv4Addr);
    res.redirect(paymentUrl);
  }
  @Get('/vnpay_return')
  @Render('success')
  returnDisplay(@Req() req: Request) {
    return this.paymentService.handleReturnPayment(req);
  }

  @Get('error')
  @Render('error')
  displayError(@Query('message') message: string) {
    return { message, error: { status: 404 } };
  }
}
