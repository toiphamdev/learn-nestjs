import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductDetail } from './entities/product-detail.entity';
import { ProductImage } from './entities/product-image.entity';
import { MyGateway } from 'src/socket/socket.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductDetail, ProductImage])],
  controllers: [ProductController],
  providers: [ProductService, MyGateway],
})
export class ProductModule {}
