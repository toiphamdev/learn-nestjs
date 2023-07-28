import { Body, Controller, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from 'src/auth/guard';
import { Request } from 'express';
import { Cart } from './entities/cart.entity';
import { CartDetailDto } from './dto/cart-detail.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Put()
  @UseGuards(JwtAuthGuard)
  initCart(@Req() req: Request): Promise<{ cart: Cart; totalPrice: number }> {
    const userId = req.user['id'];
    return this.cartService.initCart(userId);
  }
  @Post('add-to-cart')
  @UseGuards(JwtAuthGuard)
  addTocart(
    @Body() cartItem: CartDetailDto,
    @Req() req: Request,
  ): Promise<{ cart: Cart; totalPrice: number }> {
    const userId = req.user['id'];
    cartItem.userId = userId;
    return this.cartService.addToCart(cartItem);
  }
}
