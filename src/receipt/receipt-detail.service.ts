import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceiptDetail } from './entities/reciept-detail.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ReceiptDetailService {
  constructor(
    @InjectRepository(ReceiptDetail)
    private readonly receiptDetailRepo: Repository<ReceiptDetail>,
  ) {}
}
