import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductDetail } from './entities/product-detail.entity';
import { ProductImage } from './entities/product-image.entity';
import { SocketModule } from 'src/socket/socket.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductDetail, ProductImage]),
    SocketModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
