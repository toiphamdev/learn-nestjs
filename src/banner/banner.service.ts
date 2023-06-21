import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from './entities/banner.entity';
import { Repository } from 'typeorm';
import { BannerDto } from './dto/banner.dto';
import * as fs from 'fs-extra';
import { QueryBannerDto } from './dto/query-banner.dto';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>,
  ) {}
  async createBanner(banner: BannerDto): Promise<{ message: string }> {
    try {
      banner.createdAt = new Date();
      banner.updatedAt = new Date();
      await this.bannerRepository.save(banner);
      if (banner.image) {
        const tempPath = `./public/temp/${banner.image}`;
        const destinationPath = `./public/uploads/banners/${banner.image}`;
        await fs.move(tempPath, destinationPath);
      }
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }

  async updateBanner(
    id: number,
    banner: BannerDto,
  ): Promise<{ message: string }> {
    try {
      const oldBanner = await this.bannerRepository.findOne({
        where: {
          id,
        },
      });
      banner.updatedAt = new Date();
      const updatedBanner = await this.bannerRepository.update(id, banner);
      if (updatedBanner.affected > 0) {
        if (oldBanner.image !== banner.image) {
          if (banner.image && !oldBanner.image) {
            const tempPath = `./public/temp/${banner.image}`;
            const destinationPath = `./public/uploads/banners/${banner.image}`;
            await fs.move(tempPath, destinationPath);
          } else if (!banner.image && oldBanner.image) {
            const destinationPath = `./public/uploads/banners/${oldBanner.image}`;
            await fs.remove(destinationPath);
          } else {
            const tempPath = `./public/temp/${banner.image}`;
            const destinationPath = `./public/uploads/banners/${banner.image}`;
            await fs.move(tempPath, destinationPath);
            const removePath = `./public/uploads/banners/${oldBanner.image}`;
            await fs.remove(removePath);
          }
        }
      }
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }
  async getAllBanner(query: QueryBannerDto): Promise<{
    data: Banner[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> {
    try {
      const queryBuilder = this.bannerRepository.createQueryBuilder('banner');
      if (!query.page || !query.size) {
        query.page = 1;
        query.size = 10;
      }
      if (query.statusId) {
        queryBuilder.andWhere('banner.statusId = :statusId', {
          statusId: query.statusId,
        });
      }
      if (query.updatedAt) {
        queryBuilder.orderBy('banner.updatedAt', query.updatedAt);
      }
      const skip = (query.page - 1) * query.size;
      const banners = await queryBuilder
        .leftJoinAndSelect('banner.status', 'status')
        .select(['banner', 'status.code', 'status.value'])
        .skip(skip)
        .take(query.size)
        .getManyAndCount();
      return {
        data: banners[0],
        meta: {
          current: query.page,
          size: query.size,
          totalItems: banners[1],
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }
  async deleteBanner(id: number): Promise<{ message: string }> {
    try {
      const banner = await this.bannerRepository.findOne({ where: { id } });
      const deletedBanner = await this.bannerRepository.delete(id);
      if (deletedBanner.affected > 0) {
        if (banner.image) {
          const removePath = `./public/uploads/banners/${banner.image}`;
          await fs.remove(removePath);
        }
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }
}
