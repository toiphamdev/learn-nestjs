import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { Repository } from 'typeorm';
import { TypeVoucher } from './entities/type-voucher.entity';
import { QueryVoucherDto } from './dto/query-voucher.dto';
import { VoucherDto } from './dto/voucher.dto';
import { VoucherUsed } from './entities/voucher-used.entity';

@Injectable()
export class VoucherService {
  constructor(
    @InjectRepository(Voucher)
    private readonly voucherRepo: Repository<Voucher>,
    @InjectRepository(TypeVoucher)
    private readonly typeVoucherRepo: Repository<TypeVoucher>,
    @InjectRepository(VoucherUsed)
    private readonly voucherUsedRepo: Repository<VoucherUsed>,
  ) {}
  // voucher
  async getAllVoucher(query: QueryVoucherDto) {
    try {
      const queryBuilder = this.voucherRepo.createQueryBuilder('voucher');
      if (query.typeVoucherId) {
        queryBuilder.andWhere('voucher.typeVoucherId = :typeVoucherId', {
          typeVoucherId: query.typeVoucherId,
        });
      }
      if (!query.page || !query.size) {
        query.page = 1;
        query.size = 10;
      }
      const sortedProperties = Object.entries(query).reduce(
        (result, [key, value]) => {
          if (key.startsWith('sort')) {
            const newKey = key.replace('sort', '');
            queryBuilder.orderBy(newKey, value);
            result.push({ [newKey]: value });
          }
          return result;
        },
        [],
      );
      const vouchers = await queryBuilder.getManyAndCount();
      return {
        data: vouchers[0],
        meta: {
          current: query.page,
          size: query.size,
          totalItems: vouchers[1],
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
  async createVoucher(voucher: VoucherDto): Promise<{ message: string }> {
    try {
      voucher.createdAt = new Date();
      voucher.updatedAt = new Date();
      await this.voucherRepo.save(voucher);
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
  async getVoucherByCode(code: string) {
    try {
      const voucher = await this.voucherRepo.findOne({
        where: { codeVoucher: code, statusId: 'ACTIVE' },
        relations: ['typeVoucher'],
      });
      return voucher;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  async getVoucherUsed(
    userId: number,
    voucherId: number,
  ): Promise<VoucherUsed> {
    try {
      const voucherUsed = await this.voucherUsedRepo.findOne({
        where: {
          userId,
          voucherId,
        },
      });
      return voucherUsed;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
  async createVoucherUsed(
    voucherId: number,
    userId: number,
  ): Promise<VoucherUsed> {
    try {
      const created = await this.voucherUsedRepo.save({
        voucherId,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return created;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
}
