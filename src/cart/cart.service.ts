import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CartDetail } from './entities/cart-detail.entitty';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
  ) {}
  async initCart(id: number) {
    try {
      const cart = this.cartRepo.createQueryBuilder('cart');
      const isExist = await this.cartRepo.exist({ where: { id } });
      if (!isExist) {
        await this.cartRepo.save({
          userId: id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      const result = await cart
        .leftJoinAndSelect('cart.detail', 'detail')
        .where('cart.userId :id', { id })
        .getOne();
      return result;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Something went wrong!');
    }
  }
}
