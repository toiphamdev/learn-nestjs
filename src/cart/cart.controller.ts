import { Controller, Put } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Put()
  initCart(userId: number) {
    userId = 1;
    return this.cartService.initCart(userId);
  }
}
