import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { ReceiptDto } from './dto/receipt.dto';
import { Request } from 'express';
import { JwtAuthGuard, RolesGuard } from 'src/auth/guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/user/entities/roles.enum';
import { QueryReceiptDto } from './dto/query-receipt.dto';
import { ReceiptDetailService } from './receipt-detail.service';
import { ReceiptDetailDto } from './dto/receipt-detail.dto';

@Controller('receipt')
export class ReceiptController {
  constructor(
    private readonly receiptService: ReceiptService,
    private readonly receiptDetailService: ReceiptDetailService,
  ) {}
  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createReceipt(
    @Body() receipt: ReceiptDto,
    @Req() req: Request,
  ): Promise<{ message: string }> {
    const user = req.user;
    return this.receiptService.createReceipt(user['id'], receipt);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateReceipt(
    @Param() param: { id: number },
    @Body() receipt: ReceiptDto,
    @Req() req: Request,
  ): Promise<{ message: string; error: boolean }> {
    const user = req.user;

    return this.receiptService.updateReceipt(user['id'], param.id, receipt);
  }
  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteReceipt(@Param() param: { id: number }, @Req() req: Request) {
    const user = req.user;
    return this.receiptService.deleteReceipt(param.id, user['id']);
  }

  @Get()
  getAllReceipt(@Query() query: QueryReceiptDto) {
    return this.receiptService.getAllReceipt(query);
  }

  @Post('/detail')
  createReceiptDetail(@Body() rcDt: ReceiptDetailDto) {
    return this.receiptDetailService.createReceiptDetail(rcDt);
  }
}
