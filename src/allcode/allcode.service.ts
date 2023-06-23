import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Allcode } from './entities/allcode.entity';
import { AllcodeDto } from './dto/allcode.dto';
import slugify from 'slugify';
import { removeDiacritics } from 'src/utils/string.utils';
import { UpdateAllcodeDto } from './dto/update-allcode.dto';

@Injectable()
export class AllcodeService {
  constructor(
    @InjectRepository(Allcode) private allcodeRepository: Repository<Allcode>,
  ) {}

  async createTypeCode(
    allcode: AllcodeDto,
  ): Promise<{ message: string; statusCode: number }> {
    try {
      const typecode = new Allcode();
      const options = {
        lower: true, // Convert the slug to lowercase
        remove: /[*+~.()'"!:@]/g, // Remove special characters
        replacement: '-', // Replace spaces with hyphens
      };
      typecode.type = allcode.type;
      typecode.value = allcode.value;
      typecode.parentCode = allcode.parentCode ? allcode.parentCode : null;
      typecode.code = allcode.code
        ? allcode.code
        : slugify(removeDiacritics(allcode.value.toLowerCase()), options);
      typecode.createdAt = new Date();
      typecode.updatedAt = new Date();
      await this.allcodeRepository.save(typecode);
      return {
        statusCode: 201,
        message: 'Created type code successfully',
      };
    } catch (error) {
      console.log(error);
      throw new Error('Somethings went wrong.');
    }
  }

  async getAllCodeByType(
    type: string,
    page: number | undefined,
    size: number | undefined,
    parentCode: string | undefined,
  ): Promise<{
    data: AllcodeDto[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    if (!page || !size) {
      page = 1;
      size = 10;
    }
    const skip = (page - 1) * size;
    try {
      const typecode = await this.allcodeRepository.findAndCount({
        where: { type, parentCode },
        skip: skip,
        take: size,
      });
      return {
        data: typecode[0],
        meta: {
          current: page,
          size: size,
          totalItems: typecode[1],
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  async updateAllcode(
    allcode: UpdateAllcodeDto,
  ): Promise<{ message: string; err: boolean }> {
    try {
      allcode.updatedAt = new Date();
      const updatedAllcode = await this.allcodeRepository.update(
        allcode.id,
        allcode,
      );
      if (updatedAllcode.affected !== 0) {
        return { message: 'success', err: false };
      } else {
        return {
          message: 'failed',
          err: true,
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  async deleteAllcode(id: number): Promise<{ message: string; err: boolean }> {
    try {
      const deletedCode = await this.allcodeRepository.delete(id);
      if (deletedCode.affected > 0) {
        return {
          message: 'success',
          err: false,
        };
      } else {
        return {
          message: 'failed',
          err: true,
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }
}
