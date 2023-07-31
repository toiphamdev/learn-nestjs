import { Controller, Post, Body, UseGuards, Query, Get } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherDto } from './dto/voucher.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard, RolesGuard } from 'src/auth/guard';
import { Role } from 'src/user/entities/roles.enum';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createVoucher(@Body() voucher: VoucherDto) {
    return this.voucherService.createVoucher(voucher);
  }

  @Get('code')
  getVoucherByCode(@Query() query: { codeVoucher: string }) {
    return this.voucherService.getVoucherByCode(query.codeVoucher);
  }
}
