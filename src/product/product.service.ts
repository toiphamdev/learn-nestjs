import { ForbiddenException, Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs-extra';
import { ProductDto } from './dto/product.dto';
import { ProductDetail } from './entities/product-detail.entity';
import { ProductDetailDto } from './dto/product-detail.dto';
import { MyGateway } from 'src/socket/socket.gateway';
import { SearchService } from 'src/search/search.service';
import { SearchProductDto } from './dto/search-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
    private readonly socketGateway: MyGateway,
    private readonly searchService: SearchService,
  ) {}
  //product service
  async createProduct(
    product: ProductDto,
  ): Promise<{ message: string; product: Product }> {
    try {
      console.log('product', product);
      const createdProd = await this.productRepository.save({
        statusId: 'DRAFT',
        createdAt: new Date(),
        ...product,
      });
      if (createdProd) {
        this.socketGateway.server.emit('productUpdated', {
          productId: createdProd.id,
        });
        this.searchService.indexProduct(createdProd);
        return {
          message: 'Create product success!',
          product: createdProd,
        };
      }
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
        relations: ['detail', 'comments'],
      });
      if (product) {
        return {
          message: 'success',
          product,
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  async deleteProduct(id: number): Promise<{ message: string }> {
    try {
      const product = await this.productRepository.findOne({
        where: {
          id,
        },
        relations: ['detail', 'detail.images'],
      });
      if (product) {
        for (const productDetail of product.detail) {
          for (const image of productDetail.images) {
            const imagePath = `./public/uploads/images/${image}`;
            await fs.remove(imagePath);
            console.log(`item ${image} has been deleted`);
          }
        }
        const itemDeleted = await this.productRepository.delete({ id });
        if (itemDeleted.affected > 0) {
          return {
            message: 'success',
          };
        }
      } else {
        throw new ForbiddenException('Product not found');
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  async updateProduct(product: ProductDto): Promise<{ message: string }> {
    try {
      const updatedProduct = await this.productRepository.update(
        {
          id: product.id,
        },
        product,
      );
      if (updatedProduct.affected) {
        return {
          message: 'success',
        };
      } else {
        throw new ForbiddenException('Somethings went wrong!');
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong!');
    }
  }
  //product detail service
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
      productDetail.originalPrice = detail.originalPrice;
      productDetail.discountPrice = detail.discountPrice;
      productDetail.description = detail.description;
      productDetail.createdAt = new Date();
      productDetail.images = detail.images;
      const updatedProdDetail = await this.productDetailRepository.save(
        productDetail,
      );
      if (updatedProdDetail) {
        for (const image of detail.images) {
          const tempPath = `./public/temp/${image}`;
          const destinationPath = `./public/uploads/images/${image}`;
          const successMoves: string[] = [];
          try {
            await fs.move(tempPath, destinationPath);
            successMoves.push(image);
          } catch (error) {
            console.log(updatedProdDetail);
            // Rollback moves if error occurs
            if (updatedProdDetail) {
              this.productDetailRepository.delete(updatedProdDetail.id);
            }
            console.log(error);
            for (const successMove of successMoves) {
              const rollbackPath = `./public/temp/${successMove}`;
              await fs.move(destinationPath, rollbackPath);
            }
            throw new ForbiddenException('Somethings went wrong');
          }
        }
      }
      return {
        message: 'Create detail product success!',
        productDetail: updatedProdDetail,
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  searchProducts = async (query: SearchProductDto) => {
    if (!query.page && !query.size) {
      query.page = 1;
      query.size = 2;
    }
    const filler = [];
    if (query.categoryId) {
      filler.push({ term: { categoryId: query.categoryId } });
    }
    const must = query.name
      ? [{ match_phrase_prefix: { name: query.name } }]
      : [];
    const response = await this.searchService.searchProducts({
      from: (query.page - 1) * query.size, // Vị trí bắt đầu của trang
      size: query.size, // Số lượng kết quả trả về cho mỗi trang
      query: {
        bool: {
          must: must,
          filter: [...filler],
        },
      },
    });

    // Xử lý kết quả tìm kiếm ở đây
    const totalHits = response.hits.total.valueOf(); // Tổng số kết quả
    const productIds = response.hits.hits.map((hit) => {
      const product = hit._source as Product;
      return product.id;
    });
    const products = await this.productRepository.findByIds(productIds);
    return {
      products,
      totalHits,
    };
  };
}
