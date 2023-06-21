import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import * as fs from 'fs-extra';
import { ProductDto } from './dto/product.dto';
import { ProductDetail } from './entities/product-detail.entity';
import { ProductDetailDto } from './dto/product-detail.dto';
import { MyGateway } from 'src/socket/socket.gateway';
import { SearchService } from 'src/search/search.service';
import { SearchProductDto } from './dto/search-product.dto';
import { removeDiacritics } from 'src/utils/string.utils';
import slugify from 'slugify';
import { ProductDetailSize } from './entities/product-detail-size.entity';
import { ProductDetailSizeDto } from './dto/product-detail-size.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,
    @InjectRepository(ProductDetailSize)
    private readonly productDetailSizeRepository: Repository<ProductDetailSize>,
    private readonly socketGateway: MyGateway,
    private readonly searchService: SearchService,
  ) {}
  //product service
  async createProduct(
    product: ProductDto,
  ): Promise<{ message: string; product: Product }> {
    try {
      const createdProd = await this.productRepository.save({
        statusId: 'DRAFT',
        createdAt: new Date(),
        updatedAt: new Date(),
        ...product,
      });
      if (createdProd) {
        this.socketGateway.server.emit('createProduct', {
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
      const product = await this.productRepository
        .createQueryBuilder('product')
        .where('product.id = :id', { id: id })
        .leftJoinAndSelect('product.detail', 'detail')
        .leftJoinAndSelect('detail.size', 'size')
        .leftJoinAndSelect('detail.color', 'color')
        .select(['product', 'size', 'color.code', 'color.value', 'detail'])
        .getOne();
      if (product) {
        await this.productRepository.update(product.id, {
          view: product.view + 1,
        });
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
      const product = await this.productRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.detail', 'detail')
        .select(['product', 'detail.images'])
        .where({ id: id })
        .getOne();

      const images = [];
      if (product.detail.length > 0) {
        for (const detail of product.detail) {
          images.push(...detail.images);
        }
      }
      if (images.length > 0) {
        for (const image of images) {
          const imagePath = `./public/uploads/images/${image}`;
          await fs.remove(imagePath);
          console.log(`item ${image} has been deleted`);
        }
      }
      this.searchService.removeProduct(id);
      const deletedProduct = await this.productRepository.delete(id);
      if (deletedProduct.affected > 0) {
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Somethings went wrong');
    }
  }

  async updateProduct(
    product: ProductDto,
    id: number,
  ): Promise<{ message: string }> {
    try {
      product.updatedAt = new Date();
      const updatedProduct = await this.productRepository.update(
        {
          id: id,
        },
        product,
      );
      if (updatedProduct.affected) {
        const productUpdated = await this.productRepository.findOne({
          where: { id: id },
        });
        this.socketGateway.server.emit('productUpdated', {
          productId: productUpdated.id,
        });
        console.log(productUpdated);
        await this.searchService.updateProduct(productUpdated);
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
  searchProducts = async (
    query: SearchProductDto,
  ): Promise<{
    data: Product[];
    meta: {
      current: number;
      size: number;
      totalItems: number | object;
    };
  }> => {
    try {
      if (!query.page && !query.size) {
        query.page = 1;
        query.size = 2;
      }
      if (query.name) {
        const options = {
          lower: true, // Convert the slug to lowercase
          remove: /[*+~.()'"!:@]/g, // Remove special characters
          replacement: ' ', // Replace spaces with hyphens
        };
        const q = slugify(removeDiacritics(query.name.toLowerCase()), options);
        query.name = q;
      }
      const filler = [];
      if (query.statusId) {
        filler.push({ term: { statusId: query.statusId } });
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
      const products = await this.productRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.detail', 'detail')
        .leftJoinAndSelect('product.status', 'status')
        .leftJoinAndSelect('detail.color', 'color')
        .select([
          'product',
          'detail.images',
          'detail.discountPrice',
          'detail.iginalPrice',
          'status.value',
          'status.code',
          'color.value',
          'color.code',
        ])
        .where({ id: In(productIds) })
        .getMany();
      return {
        data: products,
        meta: {
          current: query.page,
          size: query.size,
          totalItems: totalHits,
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  };

  fillterProducts = async (
    query: SearchProductDto,
  ): Promise<{
    data: Product[];
    meta: {
      current: number;
      size: number;
      totalItems: number;
    };
  }> => {
    try {
      let queryBuilder = this.productRepository
        .createQueryBuilder('product')
        .leftJoin('product.detail', 'detail');

      if (query.fromPrice && query.toPrice) {
        queryBuilder = queryBuilder.where(
          'detail.discountPrice BETWEEN :fromPrice AND :toPrice',
          { fromPrice: query.fromPrice, toPrice: query.toPrice },
        );
      } else if (query.fromPrice) {
        queryBuilder = queryBuilder.where(
          'detail.discountPrice >= :fromPrice',
          {
            fromPrice: query.fromPrice,
          },
        );
      } else if (query.toPrice) {
        queryBuilder = queryBuilder.where('detail.discountPrice <= :toPrice', {
          toPrice: query.toPrice,
        });
      }
      if (query.colors) {
        let colors = [];
        if (typeof query.colors === 'string') {
          colors.push(query.colors);
        } else {
          colors = query.colors;
        }
        queryBuilder = queryBuilder.andWhere(
          'ARRAY[:...colors]::text[] && product.colors',
          {
            colors: colors,
          },
        );
      }
      if (query.brandId) {
        queryBuilder.andWhere('product.brandId = :brandId', {
          brandId: query.brandId,
        });
      }
      if (query.categoryId) {
        queryBuilder.andWhere('product.categoryId = :categoryId', {
          categoryId: query.categoryId,
        });
      }
      if (query.statusId) {
        queryBuilder.andWhere('product.statusId = :statusId', {
          statusId: query.statusId,
        });
      }
      if (query.sold) {
        queryBuilder.orderBy('product.price', query.sold);
      }
      if (query.createdAt) {
        queryBuilder.orderBy('product.createdAt', query.createdAt);
      }
      if (query.createdAt) {
        queryBuilder.orderBy('product.updatedAt', query.updatedAt);
      }
      if (query.page && query.size) {
        const skip = (query.page - 1) * query.size;
        queryBuilder = queryBuilder.skip(skip).take(query.size);
      } else {
        query.page = 1;
        query.size = 10;
        const skip = (query.page - 1) * query.size;
        queryBuilder = queryBuilder.skip(skip).take(query.size);
      }
      const response = await queryBuilder
        .select(['product.id'])
        .getManyAndCount();
      const productIds = response[0].map((item) => item.id);
      const products = await this.productRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.detail', 'detail')
        .leftJoinAndSelect('product.status', 'status')
        .leftJoinAndSelect('detail.color', 'color')
        .select([
          'product',
          'detail.images',
          'detail.discountPrice',
          'detail.originalPrice',
          'status.value',
          'status.code',
          'color.value',
          'color.code',
        ])
        .where({ id: In(productIds) })
        .getMany();
      return {
        data: products,
        meta: {
          current: query.page,
          size: query.size,
          totalItems: response[1],
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  };

  async getProductdetailByProdId(id: number): Promise<ProductDetail[]> {
    try {
      const details = await this.productDetailRepository.find({
        where: {
          productId: id,
        },
      });
      return details;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
  //product detail
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
  async updateProductDetail(id: number, dt: ProductDetailDto) {
    try {
      const newImages = dt.images ? dt.images : [];
      const detail = await this.productDetailRepository.findOne({
        where: { id },
      });
      const oldImages = detail.images ? detail.images : [];
      const imagesToAdd = newImages.filter(
        (image) => !oldImages.includes(image),
      );
      const imagesToRemove = oldImages.filter(
        (image) => !newImages.includes(image),
      );
      for (const image of imagesToRemove) {
        const destinationPath = `./public/uploads/images/${image}`;
        await fs.remove(destinationPath);
      }
      for (const image of imagesToAdd) {
        const tempPath = `./public/temp/${image}`;
        const destinationPath = `./public/uploads/images/${image}`;
        await fs.move(tempPath, destinationPath);
      }
      const updatedProdDetail = await this.productDetailRepository.update(
        id,
        dt,
      );
      if (updatedProdDetail.affected > 0) {
        this.socketGateway.server.send('productUpdated', {
          productId: detail.productId,
        });
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  async deleteProductDetail(id: number): Promise<{ message: string }> {
    try {
      const detail = await this.productDetailRepository.findOne({
        where: { id },
      });
      for (const image of detail.images) {
        const destinationPath = `./public/uploads/images/${image}`;
        await fs.remove(destinationPath);
      }
      const deletedProdDetail = await this.productDetailRepository.delete(id);
      if (deletedProdDetail.affected > 0) {
        this.socketGateway.server.send('productUpdated', {
          productId: detail.productId,
        });
        return { message: 'success' };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  async getDetailByProductId(productId: number): Promise<ProductDetail[]> {
    try {
      const details = await this.productDetailRepository.find({
        where: {
          productId: productId,
        },
      });
      return details;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  async createDetailSize(
    size: ProductDetailSizeDto,
  ): Promise<{ message: string }> {
    try {
      size.createdAt = new Date();
      const createdSize = await this.productDetailSizeRepository.save(size);
      if (createdSize) {
        const detail = await this.productDetailRepository.findOne({
          where: { id: createdSize.productDetailId },
        });
        this.socketGateway.server.send('productUpdated', {
          productId: detail.productId,
        });
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  async updateSize(
    id: number,
    size: ProductDetailSizeDto,
  ): Promise<{ message: string }> {
    try {
      const updatedSize = await this.productDetailSizeRepository.update(
        id,
        size,
      );
      if (updatedSize.affected > 0) {
        const detail = await this.productDetailRepository.findOne({
          where: { id: size.productDetailId },
        });
        this.socketGateway.server.send('productUpdated', {
          productId: detail.productId,
        });
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  async deleteSize(id: number): Promise<{ message: string }> {
    try {
      const deletedSize = await this.productDetailSizeRepository.delete(id);
      if (deletedSize.affected > 0) {
        return {
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }

  async getAllSizeByDetailId(
    productDetailId: number,
  ): Promise<ProductDetailSize[]> {
    try {
      const sizes = this.productDetailSizeRepository.find({
        where: {
          productDetailId: productDetailId,
        },
      });
      return sizes;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
}
