import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from 'src/banner/entities/banner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannerSeed {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>,
  ) {}
  async seed(): Promise<void> {
    const existingBanner = await this.bannerRepository.count();
    if (existingBanner === 0) {
      const banners = [
        {
          name: 'Vui hè bất tận',
          statusId: 'ACTIVE',
          description: 'Giảm giá bất tận 7/7',
          image: 'slider_1.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CLEAN việt Nam',
          statusId: 'ACTIVE',
          description: 'Những chiếc áo vì mỗi xanh',
          image: 'slider_2.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sản phẩm tốt',
          statusId: 'ACTIVE',
          description: 'Chương trình đặc biệt',
          image: 'slider_3.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Yoggu',
          statusId: 'ACTIVE',
          description:
            'Giữ ấm áp và phong cách với bộ sưu tập mùa đông của chúng tôi',
          image: 'slider_4.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      await this.bannerRepository.save(banners);
      console.log('Seed data banners created successfully');
    } else {
      console.log('Seed data banners already exists');
    }
  }
}
