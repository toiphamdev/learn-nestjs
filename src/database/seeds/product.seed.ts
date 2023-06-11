// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { ProductDto } from '../../product/dto/product.dto';
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
//         const products: ProductDto[]=[
//             {
//                 name:""
//             }
//         ]
//       await this.productRepository.save(products);
//       console.log('Seed data users created successfully.');
//     } else {
//       console.log('Seed data users already exists.');
//     }
//   }
// }
