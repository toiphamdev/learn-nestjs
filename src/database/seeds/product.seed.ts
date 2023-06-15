import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatedProductDto } from '../../product/dto/created-product.dto';
import { Product } from '../../product/entities/product.entity';

@Injectable()
export class ProductSeed {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async seed(): Promise<void> {
    const existingUsers = await this.productRepository.count();

    if (existingUsers === 0) {
      const products = [
        {
          name: 'Áo Polo Nữ Cafe Phối Bo Kiểm Soát Mùi Chống Tia UV',
          brandId: 'yody',
          categoryId: 'ao-polo-nu',
          contentHtml: '<p>hh</p>',
          contentMarkdown: 'hh',
          madeBy: 'uu',
          material: 'cc',
          statusId: 'ACTIVE',
          view: 0,
          createdAt: new Date(),
        },
      ];
      await this.productRepository.save(products);
      console.log('Seed data products created successfully.');
    } else {
      console.log('Seed data products already exists.');
    }
  }
}
