import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddress } from '../../user/entities/user-address.entity';
import { Repository } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { ProductDetail } from '../../product/entities/product-detail.entity';

@Injectable()
export class ProductDetailSeed {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
  ) {}

  async seed(): Promise<void> {
    const existings = await this.productDetailRepository.count();
    if (existings === 0) {
      const products = await this.productRepository.find();
      const productDetails = [
        {
          createdAt: new Date(),
          description:
            'Chất liệu Cafe. Thoải mái vận động vào những ngày hè những đặc tính vượt trội. Kiểm soát mùi gấp 2.26 lần vải cotton thông thường. Nhanh khô - Qick Dry 1.9 lần vải thông thường. Vải bền, chắc, và không xù lông, độ co rút vải đang chỉ có 3%. Bảo vệ bạn khỏi tia UV độc hại. Thiết kế đường kẻ đi theo viền cổ áo tạo điểm nhấn cá tính.Form dáng suông phù hợp với nhiều vóc dáng cơ thể.YODY - Look good. Feel good.',
          name: 'APN4396-DEN',
          originalPrice: 25,
          productId: products[0].id,
          discountPrice: 20,
          images: [
            'apn4396-den-cjn3030-dba-1.webp',
            'apn4396-den-1.webp',
            'apn4396-den-7.webp',
            'apn4396-den-6.webp',
            'apn4396-den-cjn3030-dba-4.webp',
            'apn4396-den-cjn3030-dba-3.webp',
          ],
        },
        {
          createdAt: new Date(),
          description:
            'Chất liệu Cafe. Thoải mái vận động vào những ngày hè những đặc tính vượt trội. Kiểm soát mùi gấp 2.26 lần vải cotton thông thường. Nhanh khô - Qick Dry 1.9 lần vải thông thường. Vải bền, chắc, và không xù lông, độ co rút vải đang chỉ có 3%. Bảo vệ bạn khỏi tia UV độc hại. Thiết kế đường kẻ đi theo viền cổ áo tạo điểm nhấn cá tính.Form dáng suông phù hợp với nhiều vóc dáng cơ thể.YODY - Look good. Feel good.',
          name: 'APN4396-NAV',
          originalPrice: 25,
          productId: products[0].id,
          discountPrice: 20,
          images: [
            'apn4396-nav-2.webp',
            'apn4396-nav-1.webp',
            'apn4396-nav-4.webp',
            'apn4396-nav-3.webp',
            'apn4396-nav-cjn3030-tra-5.webp',
            'apn4396-nav-cjn3030-tra-4.webp',
          ],
        },
      ];

      await this.productDetailRepository.save(productDetails);

      console.log('Seed data product details created successfully.');
    } else {
      console.log('Seed data product details already exists.');
    }
  }
}
