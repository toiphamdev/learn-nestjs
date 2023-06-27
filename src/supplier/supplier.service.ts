import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { SupplierDto } from './dto/supplier.dto';
import { QuerySupplierDto } from './dto/query-supplier.dto';

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

  async updateSup(id: number, sup: SupplierDto): Promise<{ message: string }> {
    try {
      sup.updatedAt = new Date();
      const updatedSup = await this.SupplierRepo.update(id, sup);
      if (updatedSup.affected > 0) {
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }

  async deleteSup(id: number): Promise<{ message: string }> {
    try {
      const deleted = await this.SupplierRepo.delete(id);
      if (deleted.affected > 0) {
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }

  async getAllSuppliers(query: QuerySupplierDto): Promise<{
    data: Supplier[];
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
      const queryBuilder = this.SupplierRepo.createQueryBuilder('supplier');
      const fillterProperty = Object.entries(query).reduce(
        (result, [key, value]) => {
          if (!key.startsWith('sort') && key !== 'page' && key !== 'size') {
            console.log(key);
            queryBuilder.andWhere(`supplier.${key} = :${key}`, {
              [key]: value,
            });
            result.push({ [key]: value });
          }
          return result;
        },
        [],
      );
      const sortedProperties = Object.entries(query).reduce(
        (result, [key, value]) => {
          if (key.startsWith('sort')) {
            const newKey = key.replace('sort', '');
            queryBuilder.orderBy(`supplier.${newKey}`, value);
            result.push({ [newKey]: value });
          }
          return result;
        },
        [],
      );
      const skip = (query.page - 1) * query.size;
      const suppliers = await queryBuilder
        .skip(skip)
        .take(query.size)
        .getManyAndCount();
      return {
        data: suppliers[0],
        meta: {
          current: query.page,
          size: query.size,
          totalItems: suppliers[1],
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }
}
