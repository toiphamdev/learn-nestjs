import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { Repository } from 'typeorm';
import { TypeVoucher } from './entities/type-voucher.entity';

@Injectable()
export class VoucherService {
  constructor(
    @InjectRepository(Voucher)
    private readonly voucherRepo: Repository<Voucher>,
    @InjectRepository(TypeVoucher)
    private readonly typeVoucherRepo: Repository<TypeVoucher>,
  ) {}
  // voucher
  //   getAllVoucher(query: any) {}
}
