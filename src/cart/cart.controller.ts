import { Body, Controller, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from 'src/auth/guard';
import { Request } from 'express';
import { Cart } from './entities/cart.entity';
import { CartDetailDto } from './dto/cart-detail.dto';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { CartApiResponseDto } from './dto/cart-api-response.dto';
import { ResponseCommonDto } from 'src/allcode/dto/allcode-api-response.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "Init customer's cart" })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, type: CartApiResponseDto })
  @ApiForbiddenResponse()
  @Put()
  @UseGuards(JwtAuthGuard)
  initCart(
    @Req() req: Request,
    @Body() body: { voucherCode: string; typeShipId: number },
  ): Promise<{
    cart: Cart;
    totalPrice: number;
    useVoucherPrice: number;
    voucherId: number;
  }> {
    const userId = req.user['id'];
    return this.cartService.initCart(userId, body.voucherCode, body.typeShipId);
  }

  @ApiOperation({ summary: 'Add product to cart' })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, type: ResponseCommonDto })
  @ApiForbiddenResponse()
  @Post('add-to-cart')
  @UseGuards(JwtAuthGuard)
  addTocart(
    @Body() cartItem: CartDetailDto,
    @Req() req: Request,
  ): Promise<{ message: string }> {
    const userId = req.user['id'];
    cartItem.userId = userId;
    return this.cartService.addToCart(cartItem);
  }
}
