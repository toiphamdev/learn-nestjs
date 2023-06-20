import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductDetail } from './entities/product-detail.entity';
import { SocketModule } from 'src/socket/socket.module';
import { SearchModule } from 'src/search/search.module';
import { ProductDetailSize } from './entities/product-detail-size.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductDetail, ProductDetailSize]),
    SocketModule,
    SearchModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
