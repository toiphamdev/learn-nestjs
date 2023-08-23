import { ApiProperty } from '@nestjs/swagger';
import { Cart } from '../entities/cart.entity';

export class CartApiResponseDto {
  @ApiProperty({ type: Cart })
  cart: Cart;
  @ApiProperty()
  totalPrice: number;
  @ApiProperty()
  useVoucherPrice: number;
  @ApiProperty()
  voucherId: number;
}
