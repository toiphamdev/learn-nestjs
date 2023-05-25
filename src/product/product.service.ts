import { ForbiddenException, Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { ProductDetail } from './entity/product-detail.entity';
import { ProductDetailDto } from './dto/product-detail.dto';
import { ProductImage } from './entity/product-image.entity';
import { ProductImageDto } from './dto/product-image.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
  ) {}
  async createProduct(
    product: ProductDto,
  ): Promise<{ message: string; product: Product }> {
    try {
      const createdProd = await this.productRepository.save(product);
      if (createdProd) {
        return {
          message: 'Create product success!',
          product: createdProd,
        };
      }
    } catch (error) {
      throw new ForbiddenException('Something went wrong!');
    }
  }
  async createProductDetail(
    detail: ProductDetailDto,
  ): Promise<{ message: string; productDetail: ProductDetail }> {
    try {
      const product = await this.productRepository.findOneById(
        detail.productId,
      );
      const productDetail = new ProductDetail();
      productDetail.name = detail.name;
      productDetail.productId = product.id;
      const updatedProdDetail = await this.productDetailRepository.save(
        productDetail,
      );
      return {
        message: 'Create product success!',
        productDetail: updatedProdDetail,
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
  async getProductById(id: number): Promise<{
    message: string;
    product: ProductDto;
  }> {
    try {
      const product = await this.productRepository.findOne({
        where: {
          id,
        },
        relations: ['detail', 'detail.images'],
      });
      if (product) {
        return {
          message: 'success',
          product,
        };
      }
    } catch (error) {
      throw new ForbiddenException('Something went wrong!');
    }
  }
  async addImageToProduct(images: ProductImageDto[]): Promise<{
    message: string;
  }> {
    const queryRunner =
      this.productImageRepository.manager.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Sử dụng query builder trong transaction
      const queryBuilder =
        this.productImageRepository.createQueryBuilder('images');

      for (const image of images) {
        // Thêm các thao tác cơ sở dữ liệu vào query builder
        queryBuilder.insert().values(image).execute();
      }

      // Commit transaction nếu không có lỗi
      await queryRunner.commitTransaction();
      return {
        message: 'success',
      };
    } catch (error) {
      // Rollback transaction nếu có lỗi
      await queryRunner.rollbackTransaction();
      throw new ForbiddenException('Somethings went wrong!');
    } finally {
      // Đóng kết nối và giải phóng query runner
      await queryRunner.release();
    }
  }
}
