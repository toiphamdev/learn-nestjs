import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from '../../supplier/entities/supplier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierSeed {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
  ) {}

  async seed(): Promise<void> {
    const existingSupplier = await this.supplierRepository.count();
    if (existingSupplier === 0) {
      const suppliers = [
        {
          email: 'nguyenvana@mail.com',
          name: 'Nguyễ văn a',
          address: 'Thành phố Hồ Chí Minh',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'nguyenvanb@mail.com',
          name: 'Nguyễ văn b',
          address: 'Thành phố Hồ Chí Minh',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'nguyenvanc@mail.com',
          name: 'Nguyễ văn c',
          address: 'Thành phố Hồ Chí Minh',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'nguyenvand@mail.com',
          name: 'Nguyễ văn d',
          address: 'Thành phố Hồ Chí Minh',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      await this.supplierRepository.save(suppliers);
      console.log('Seed data supplier created successfully');
    } else {
      console.log('Seed data supplier already exists');
    }
  }
}
