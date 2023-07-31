import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Receipt } from './entities/reciept.entity';
import { Repository } from 'typeorm';
import { ReceiptDto } from './dto/receipt.dto';
import { QueryReceiptDto } from './dto/query-receipt.dto';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private readonly receiptRepo: Repository<Receipt>,
  ) {}

  async createReceipt(
    userId: number,
    receipt: ReceiptDto,
  ): Promise<{ message: string }> {
    try {
      receipt.createdAt = new Date();
      receipt.updatedAt = new Date();
      await this.receiptRepo.save({ userId, ...receipt });
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }
  async updateReceipt(
    userId: number,
    id: number,
    receipt: ReceiptDto,
  ): Promise<{
    message: string;
    error: boolean;
  }> {
    try {
      receipt.updatedAt = new Date();
      const oldReceipt = await this.receiptRepo.findOne({ where: { id } });
      const isPermission = oldReceipt.userId === userId;
      if (isPermission) {
        receipt.updatedAt = new Date();
        const updatedReceipt = await this.receiptRepo.update(id, receipt);
        return {
          message: 'success',
          error: false,
        };
      } else {
        return {
          message: 'You are not create this receipt! ',
          error: true,
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }

  async deleteReceipt(
    id: number,
    userId: number,
  ): Promise<{
    error: boolean;
    message: string;
  }> {
    try {
      const oldReceipt = await this.receiptRepo.findOne({ where: { id } });
      const isPermission = oldReceipt.userId === userId;
      if (isPermission) {
        await this.receiptRepo.delete(id);
        return {
          error: false,
          message: 'success',
        };
      } else {
        return {
          error: true,
          message: 'You are not created this receipt!',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }

  async getAllReceipt(query: QueryReceiptDto): Promise<{
    data: Receipt[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    try {
      if (!query.page || !query.size) {
        query.page = 1;
        query.size = 10;
      }
      const queryBuilder = this.receiptRepo.createQueryBuilder('receipt');
      const sortedProperties = Object.entries(query).reduce(
        (result, [key, value]) => {
          if (key.startsWith('sort')) {
            const newKey = key.replace('sort', '');
            console.log(newKey);
            queryBuilder.orderBy(`receipt.${newKey}`, value);
            result.push({ [newKey]: value });
          }
          return result;
        },
        [],
      );
      const skip = (query.page - 1) * query.size;
      const receipts = await queryBuilder
        .leftJoinAndSelect('receipt.supplier', 'supplier')
        .leftJoinAndSelect('receipt.user', 'user')
        .select([
          'user.firstName',
          'user.lastName',
          'user.id',
          'receipt',
          'supplier',
        ])
        .skip(skip)
        .take(query.size)
        .getManyAndCount();
      return {
        data: receipts[0],
        meta: {
          current: query.page,
          size: query.size,
          totalItems: receipts[1],
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }
}
