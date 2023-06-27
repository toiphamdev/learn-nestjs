import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './dto/supplier.dto';
import { QuerySupplierDto } from './dto/query-supplier.dto';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}
  @Post()
  createSup(@Body() sup: SupplierDto): Promise<{ message: string }> {
    return this.supplierService.createSupplier(sup);
  }

  @Put(':id')
  updateSup(@Param() param: { id: number }, @Body() sup: SupplierDto) {
    return this.supplierService.updateSup(param.id, sup);
  }

  @Delete(':id')
  deleteSup(@Param() param: { id: number }) {
    return this.supplierService.deleteSup(param.id);
  }

  @Get()
  getAllSupplier(@Query() query: QuerySupplierDto) {
    return this.supplierService.getAllSuppliers(query);
  }
}
