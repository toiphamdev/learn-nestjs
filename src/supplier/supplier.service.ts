import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { SupplierDto } from './dto/supplier.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly SupplierRepo: Repository<Supplier>,
  ) {}
  async createSupplier(supplier: SupplierDto): Promise<{ message: 'success' }> {
    try {
      supplier.createdAt = new Date();
      supplier.updatedAt = new Date();
      await this.SupplierRepo.save(supplier);
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }
}
