import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CartDetail } from './entities/cart-detail.entitty';
import { CartDetailDto } from './dto/cart-detail.dto';
import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';
import { User } from 'src/user/entities/user.entity';
import { VoucherService } from 'src/voucher/voucher.service';
import { KindVoucher } from 'src/voucher/voucher.enum';
import { TypeShip } from 'src/order/entity/type-ship.entity';

function isValidDateRange(dateStr1, dateStr2) {
  // Lấy ngày hôm nay
  const today = new Date();

  // Chuyển đổi hai chuỗi ngày thành các đối tượng ngày
  const date1Parts = dateStr1.split('/');
  const date2Parts = dateStr2.split('/');
  const dateObj1 = new Date(date1Parts[2], date1Parts[1] - 1, date1Parts[0]);
  const dateObj2 = new Date(date2Parts[2], date2Parts[1] - 1, date2Parts[0]);

  // So sánh ngày hôm nay với hai ngày đã chuyển đổi
  const isTodayBeforeDate1 = today <= dateObj1;
  const isTodayAfterDate2 = today >= dateObj2;

  // Kiểm tra ngày hôm nay có nằm trong khoảng thời gian hay không
  const isValidDate = isTodayBeforeDate1 || isTodayAfterDate2;

  return isValidDate;
}

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepo: Repository<Cart>,
    @InjectRepository(CartDetail)
    private readonly cartDetailRepo: Repository<CartDetail>,
    @InjectRepository(ProductDetailSize)
    private readonly productDetailSizeRepo: Repository<ProductDetailSize>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(TypeShip)
    private readonly typeShipRepo: Repository<TypeShip>,
    private readonly voucherService: VoucherService,
  ) {}
  async initCart(
    userId: number,
    voucherCode?: string,
    typeShipId?: number,
  ): Promise<{
    cart: Cart;
    totalPrice: number;
    useVoucherPrice: number;
    voucherId: number;
    typeShipId: number;
  }> {
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
        .orderBy('detail.createdAt', 'ASC')
        .getOne();
      const typeShip = await this.typeShipRepo.findOne({
        where: { id: typeShipId },
      });
      let price = 0;
      let IdVoucherUsed: number = null;
      const arrProd = result?.detail as unknown as CartDetail[];
      const totalPrice = arrProd.reduce((acc, cur) => {
        return cur.productDetailSize.productDetail.discountPrice !== 0
          ? acc +
              cur.productDetailSize.productDetail.discountPrice * cur.quantity
          : cur.productDetailSize.productDetail.originalPrice * cur.quantity;
      }, 0);
      if (voucherCode) {
        const voucher = await this.voucherService.getVoucherByCode(voucherCode);

        const user = await this.userRepo.findOne({
          where: { id: userId },
          relations: ['voucherList'],
        });
        if (voucher) {
          if (isValidDateRange(voucher.fromDate, voucher.toDate)) {
            throw new Error('This Voucher is expried');
          }
          const voucherExists = user.voucherList.some(
            (vou) => vou.id === voucher.id,
          );
          if (voucherExists) {
            const maxValue = voucher.typeVoucher.maxValue;
            const minValue = voucher.typeVoucher.minValue;
            switch (true) {
              case totalPrice > maxValue && totalPrice > minValue: {
                if (maxValue !== 0) {
                  throw new Error("This voucher can't be used with your order");
                } else {
                  price =
                    voucher.typeVoucher.typeVoucherCode === KindVoucher.PERCENT
                      ? (totalPrice *
                          (totalPrice * voucher.typeVoucher.value)) /
                        100
                      : totalPrice - voucher.typeVoucher.value;
                  IdVoucherUsed = voucher.id;
                }
                break;
              }
              case totalPrice <= maxValue && totalPrice >= minValue: {
                price =
                  voucher.typeVoucher.typeVoucherCode === KindVoucher.PERCENT
                    ? totalPrice -
                      (totalPrice * voucher.typeVoucher.value) / 100
                    : totalPrice - voucher.typeVoucher.value;
                IdVoucherUsed = voucher.id;
                break;
              }
              case totalPrice < minValue: {
                throw new Error("This voucher can't be used with your order");
              }
              default:
                break;
            }
          } else {
            throw new Error("This voucher isn't for you");
          }
        } else {
          throw new Error("This voucher wasn't found ");
        }
      }

      return {
        cart: result,
        useVoucherPrice:
          price !== 0
            ? price + Number(typeShip.price)
            : totalPrice + Number(typeShip.price),
        totalPrice: totalPrice + Number(typeShip.price),
        voucherId: IdVoucherUsed,
        typeShipId: typeShip.id ? typeShip.id : null,
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(
        error.message ? error.message : 'Something went wrong!',
      );
    }
  }
  async addToCart(item: CartDetailDto): Promise<{ message: string }> {
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
      if (productDetailSize.quantity <= 0) {
        throw new Error('This product is not available!');
      }
      if (cartDetail) {
        if (
          cartDetail.quantity + item.quantity < productDetailSize.quantity &&
          cartDetail.quantity + item.quantity > 0
        ) {
          cartDetail.quantity = cartDetail.quantity + item.quantity;
          await this.cartDetailRepo.save(cartDetail);
        } else if (cartDetail.quantity + item.quantity <= 0) {
          await this.cartDetailRepo.remove(cartDetail);
        } else {
          cartDetail.quantity = productDetailSize.quantity;
          await this.cartDetailRepo.save(cartDetail);
        }
      } else {
        if (item.quantity > 0) {
          await this.cartDetailRepo.save(item);
        } else {
          throw new Error("Quantity isn't comfortable!");
        }
      }
      return {
        message: 'success',
      };
    } catch (error) {
      console.log(error);

      throw new ForbiddenException(
        error.message ? error.message : 'Something went wrong!',
      );
    }
  }
  deleteCart(cart: Cart) {
    return this.cartRepo.remove(cart);
  }
}
