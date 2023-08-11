import {
  Controller,
  Post,
  Body,
  UseGuards,
  Query,
  Get,
  Patch,
  Param,
} from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherDto } from './dto/voucher.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard, RolesGuard } from 'src/auth/guard';
import { Role } from 'src/user/entities/roles.enum';
import { QueryVoucherDto } from './dto/query-voucher.dto';
import { statusEnum } from 'src/allcode/allcode.enum';
import { TypeVoucherDto } from './dto/type-voucher.dto';

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
  @Get()
  getAllVoucher(@Query() query: QueryVoucherDto) {
    return this.voucherService.getAllVoucher(query);
  }

  @Patch('/update/:id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateVoucher(
    @Body('statusId') statusId: statusEnum,
    @Param('id') id: number,
  ) {
    return this.voucherService.updateStatusVoucher(id, statusId);
  }
  @Post('type-voucher')
  createTypeVoucher(@Body() type: TypeVoucherDto) {
    return this.voucherService.createTypeVoucher(type);
  }
  @Patch('type-voucher/:id')
  updateTypeVoucher(@Body() statusId: statusEnum, @Param('id') id: number) {
    return this.voucherService.updateTypeVocher(id, statusId);
  }
  @Get('type-voucher')
  getAllTypeVoucher(@Query() query: QueryVoucherDto) {
    return this.voucherService.getTypeVoucher(query);
  }
}
