import { Controller, Put, Req, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from 'src/auth/guard';
import { Request } from 'express';
import { Cart } from './entities/cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Put()
  @UseGuards(JwtAuthGuard)
  initCart(userId: number, @Req() req: Request): Promise<Cart> {
    userId = req.user['id'];
    return this.cartService.initCart(userId);
  }
  //   @Post()
}
