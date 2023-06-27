import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatedProductDto } from '../../product/dto/created-product.dto';
import { Product } from '../../product/entities/product.entity';
import { SearchService } from 'src/search/search.service';
import { Allcode } from 'src/allcode/entities/allcode.entity';

@Injectable()
export class ProductSeed {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private searchService: SearchService,
    @InjectRepository(Allcode)
    private readonly allCodeRepo: Repository<Allcode>,
  ) {}

  async seed(): Promise<void> {
    const existingUsers = await this.productRepository.count();
    const colors = await this.allCodeRepo.find({
      where: {
        type: 'COLOR',
      },
    });
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
          colors,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      await this.productRepository.save(products);
      const prods = await this.productRepository.find();
      for (const prod of prods) {
        await this.searchService.indexProduct(prod);
      }
      console.log('Seed data products created successfully.');
    } else {
      console.log('Seed data products already exists.');
    }
  }
}
