import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeVoucher } from '../../voucher/entities/type-voucher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeVoucherSeed {
  constructor(
    @InjectRepository(TypeVoucher)
    private typeVoucherRepository: Repository<TypeVoucher>,
  ) {}

  async seed(): Promise<void> {
    const existingTypeVoucher = await this.typeVoucherRepository.count();
    if (existingTypeVoucher === 0) {
      const typevouchers = [
        {
          maxValue: 100,
          minValue: 80,
          value: 50,
          typeVoucherCode: 'PERCENT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maxValue: 10000,
          minValue: 1000,
          value: 200,
          typeVoucherCode: 'CASH',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          maxValue: 50,
          minValue: 0,
          value: 80,
          typeVoucherCode: 'PERCENT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      await this.typeVoucherRepository.save(typevouchers);
      console.log('Seed data typevouchers created successfully.');
    } else {
      console.log('Seed data typevouchers already exists.');
    }
  }
}
