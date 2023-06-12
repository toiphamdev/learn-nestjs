// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreatedProductDto } from '../../product/dto/created-product.dto';
// import { Product } from '../../product/entities/product.entity';

// @Injectable()
// export class ProductSeed {
//   constructor(
//     @InjectRepository(Product)
//     private productRepository: Repository<Product>,
//   ) {}

//   async seed(): Promise<void> {
//     const existingUsers = await this.productRepository.count();

//     if (existingUsers === 0) {
//       const products: CreatedProductDto[] = [
//         {
//           name: 'Quần kaki dài nam giả jean co giãn nhẹ QKKJ01 PigoFashion',
//         categoryId:""
//         },
//       ];
//         await this.productRepository.save(products);
//       console.log('Seed data users created successfully.');
//     } else {
//       console.log('Seed data users already exists.');
//     }
//   }
// }
