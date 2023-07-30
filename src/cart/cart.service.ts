import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CartDetail } from './entities/cart-detail.entitty';
import { CartDetailDto } from './dto/cart-detail.dto';
import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';
import { error, log } from 'console';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
    @InjectRepository(CartDetail)
    private readonly cartDetailRepo: Repository<CartDetail>,
    @InjectRepository(ProductDetailSize)
    private readonly productDetailSizeRepo: Repository<ProductDetailSize>,
  ) {}
  async initCart(userId: number): Promise<{ cart: Cart; totalPrice: number }> {
    try {
      const queryBuilder = this.cartRepo.createQueryBuilder('cart');
      const isExist = await this.cartRepo.exist({ where: { userId } });
      if (!isExist) {
        await this.cartRepo.save({
          userId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      const result = await queryBuilder
        .leftJoinAndSelect('cart.detail', 'detail')
        .leftJoinAndSelect('detail.productDetailSize', 'productDetailSize')
        .leftJoinAndSelect('productDetailSize.productDetail', 'productDetail')
        .leftJoinAndSelect('productDetail.color', 'color')
        .leftJoinAndSelect('productDetail.product', 'product')
        .where('cart.userId = :userId', { userId: userId })
        .select([
          'cart',
          'detail',
          'productDetailSize',
          'productDetail',
          'product',
          'color',
        ])
        .getOne();

      const arrProd = result?.detail as unknown as CartDetail[];
      const totalPrice = arrProd.reduce((acc, cur) => {
        return (
          acc + cur.productDetailSize.productDetail.discountPrice * cur.quantity
        );
      }, 0);
      return {
        cart: result,
        totalPrice,
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
  async addToCart(
    item: CartDetailDto,
  ): Promise<{ cart: Cart; totalPrice: number }> {
    try {
      const cart = await this.initCart(item.userId);
      item.createdAt = new Date();
      item.updatedAt = new Date();
      item.cartId = cart.cart.id;
      const cartDetail = await this.cartDetailRepo.findOne({
        where: {
          cartId: item.cartId,
          productDetailSizeId: item.productDetailSizeId,
        },
      });
      const productDetailSize = await this.productDetailSizeRepo.findOne({
        where: { id: item.productDetailSizeId },
      });
      if (cartDetail) {
        if (productDetailSize.quantity === 0) {
          throw new Error('This product is not available!');
        }
        if (
          cartDetail.quantity + item.quantity > productDetailSize.quantity &&
          cartDetail.quantity + item.quantity > 0
        ) {
          cartDetail.quantity = productDetailSize.quantity;
          await this.cartDetailRepo.save(cartDetail);
        } else if (cartDetail.quantity + item.quantity <= 0) {
          await this.cartDetailRepo.remove(cartDetail);
        } else {
          cartDetail.quantity = cartDetail.quantity + item.quantity;
          await this.cartDetailRepo.save(cartDetail);
        }
      } else {
        await this.cartDetailRepo.save(item);
      }
      const queryBuilder = await this.cartRepo
        .createQueryBuilder('cart')
        .leftJoinAndSelect('cart.detail', 'detail')
        .leftJoinAndSelect('detail.productDetailSize', 'productDetailSize')
        .leftJoinAndSelect('productDetailSize.productDetail', 'productDetail')
        .leftJoinAndSelect('productDetail.color', 'color')
        .leftJoinAndSelect('productDetail.product', 'product')
        .where('cart.userId = :userId', { userId: item.userId })
        .select([
          'cart',
          'detail',
          'productDetailSize',
          'productDetail',
          'product',
          'color',
        ])
        .getOne();
      const arrProd = queryBuilder?.detail as unknown as CartDetail[];
      const totalPrice = arrProd.reduce((acc, cur) => {
        return (
          acc + cur.productDetailSize.productDetail.discountPrice * cur.quantity
        );
      }, 0);
      return {
        cart: queryBuilder,
        totalPrice,
      };
    } catch (error) {
      console.log(error);

      throw new ForbiddenException(
        error.message ? error.message : 'Something went wrong!',
      );
    }
  }
}
