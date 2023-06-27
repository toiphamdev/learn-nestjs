import { Body, Controller, Post } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './dto/supplier.dto';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}
  @Post()
  createSup(@Body() sup: SupplierDto): Promise<{ message: string }> {
    return this.supplierService.createSupplier(sup);
  }
}
