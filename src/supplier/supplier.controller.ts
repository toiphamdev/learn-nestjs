import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './dto/supplier.dto';
import { QuerySupplierDto } from './dto/query-supplier.dto';
import { Roles } from '../auth/decorator/roles.decorator';
import { Role } from '../user/entities/roles.enum';
import { JwtAuthGuard, RolesGuard } from 'src/auth/guard';
import { Supplier } from './entities/supplier.entity';

@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}
  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createSup(@Body() sup: SupplierDto): Promise<{ message: string }> {
    return this.supplierService.createSupplier(sup);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateSup(@Param() param: { id: number }, @Body() sup: SupplierDto) {
    return this.supplierService.updateSup(param.id, sup);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteSup(@Param() param: { id: number }) {
    return this.supplierService.deleteSup(param.id);
  }

  @Get()
  getAllSupplier(@Query() query: QuerySupplierDto): Promise<{
    data: Supplier[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    return this.supplierService.getAllSuppliers(query);
  }
}
