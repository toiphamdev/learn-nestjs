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
          name: 'Giảm giá mùa hè',
          statusId: 'ACTIVE',
          description: 'Giảm giá tới 50% cho bộ sưu tập mùa hè',
          image: 'summer-sale.jpg',
          createdAt: new Date(),
        },
        {
          name: 'Hàng mới về',
          statusId: 'ACTIVE',
          description: 'Khám phá xu hướng thời trang mới nhất',
          image: 'new-arrivals.jpg',
          createdAt: new Date(),
        },
        {
          name: 'Ngày lễ đặc biệt',
          statusId: 'ACTIVE',
          description: 'Mua sắm những bộ trang phục hoàn hảo cho ngày lễ',
          image: 'holiday-specials.jpg',
          createdAt: new Date(),
        },
        {
          name: 'Bộ sưu tập mùa đông',
          statusId: 'ACTIVE',
          description:
            'Giữ ấm áp và phong cách với bộ sưu tập mùa đông của chúng tôi',
          image: 'winter-collection.jpg',
          createdAt: new Date(),
        },
      ];
      await this.bannerRepository.save(banners);
      console.log('Seed data banners created successfully');
    } else {
      console.log('Seed data banners already exists');
    }
  }
}
