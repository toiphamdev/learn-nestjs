import { ForbiddenException, Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { ProductDetail } from './entity/product-detail.entity';
import { ProductDetailDto } from './dto/product-detail.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRespository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRespository: Repository<ProductDetail>,
  ) {}
  async createProduct(
    product: ProductDto,
  ): Promise<{ message: string; product: Product }> {
    try {
      const createdProd = await this.productRespository.save(product);
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
      const id = new ObjectId(detail.productId);
      const product = await this.productRespository.findOneById(
        '646c859dee39259da3e3750a',
      );
      const productDetail = new ProductDetail();
      productDetail.name = detail.name;
      product.detail = productDetail;
      productDetail.product = product;
      await this.productRespository.save(product);
      const updatedProdDetail = await this.productDetailRespository.save(
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
}
