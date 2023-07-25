import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CartDetail } from './entities/cart-detail.entitty';
import { CartDetailDto } from './dto/cart-detail.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
    @InjectRepository(CartDetail)
    private readonly cartDetailRepo: Repository<CartDetail>,
  ) {}
  async initCart(userId: number): Promise<Cart> {
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
        .where('cart.userId = :userId', { userId })
        .getOne();
      return result;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
  async addToCart(item: CartDetailDto) {
    try {
      const cart = await this.initCart(item.userId);
      item.cartId = cart.id;
      item.createdAt = new Date();
      item.updatedAt = new Date();
      await this.cartDetailRepo.save(item);
      const queryBuilder = this.cartRepo
        .createQueryBuilder('cart')
        .leftJoinAndSelect('cart.detail', 'detail')
        .leftJoinAndSelect('detail.productDetailSize', 'productDetailSize')
        .where('cart.userId = :userId', { userId: item.userId })
        .getOne();

      return queryBuilder;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
}
