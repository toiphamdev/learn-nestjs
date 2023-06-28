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
import { Receipt } from './entities/reciept.entity';
import { ReceiptDetail } from './entities/reciept-detail.entity';

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
  getAllReceipt(@Query() query: QueryReceiptDto): Promise<{
    data: Receipt[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    return this.receiptService.getAllReceipt(query);
  }

  @Post('/detail')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createReceiptDetail(
    @Body() rcDt: ReceiptDetailDto,
    @Req() req: Request,
  ): Promise<{ error: boolean; message: string }> {
    const user = req.user;
    return this.receiptDetailService.createReceiptDetail(user['id'], rcDt);
  }
  @Put('/detail/:id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateReceiptDetail(
    @Param() param: { id: number },
    @Body() rcDetail: ReceiptDetailDto,
    @Req() req: Request,
  ): Promise<{ error: boolean; message: string }> {
    const user = req.user;
    return this.receiptDetailService.updateReceiptDetail(
      param.id,
      user['id'],
      rcDetail,
    );
  }

  @Delete('/detail/:id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteReceiptDetail(
    @Param() param: { id: number },
    @Req() req: Request,
  ): Promise<{ error: boolean; message: string }> {
    return this.receiptDetailService.deleteReceiptDetail(
      param.id,
      req.user['id'],
    );
  }

  @Get('/:receiptId')
  getAllReceiptDeatil(
    @Query() query: QueryReceiptDto,
    @Param() param: { receiptId: number },
  ): Promise<{
    data: ReceiptDetail[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    return this.receiptDetailService.getAllReceipt(param.receiptId, query);
  }
}
