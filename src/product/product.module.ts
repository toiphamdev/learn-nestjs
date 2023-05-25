import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { ProductDetail } from './entity/product-detail.entity';
import { ProductImage } from './entity/product-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductDetail, ProductImage])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
