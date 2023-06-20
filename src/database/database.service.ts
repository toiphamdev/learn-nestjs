import { Injectable } from '@nestjs/common';
import { UserSeed } from './seeds/user.seed';
import { UserAddressSeed } from './seeds/user-address.seed';
import { TypeShipSeed } from './seeds/type-ship.seed';
import { TypeVoucherSeed } from './seeds/type-voucher.seed';
import { SupplierSeed } from './seeds/supplier.seed';
import { BannerSeed } from './seeds/banner.seed';
import { AllcodeSeed } from './seeds/allcode.seed';
import { ProductSeed } from './seeds/product.seed';
import { ProductDetailSeed } from './seeds/product-detail.seed';
import { BlogSeed } from './seeds/blog.seed';

@Injectable()
export class DatabaseService {
  constructor(
    private readonly userSeed: UserSeed,
    private readonly userAddressSeed: UserAddressSeed,
    private readonly typeShipSeed: TypeShipSeed,
    private readonly typeVoucherSeed: TypeVoucherSeed,
    private readonly supplierSeed: SupplierSeed,
    private readonly bannerSeed: BannerSeed,
    private readonly allcodeSeed: AllcodeSeed,
    private readonly productSeed: ProductSeed,
    private readonly productDetailSeed: ProductDetailSeed,
    private readonly blogSeed: BlogSeed,
  ) {}
  async initialData(): Promise<void> {
    try {
      await this.allcodeSeed.seed();
      await this.userSeed.seed();
      await this.userAddressSeed.seed();
      await this.typeShipSeed.seed();
      await this.typeVoucherSeed.seed();
      await this.supplierSeed.seed();
      await this.bannerSeed.seed();
      await this.productSeed.seed();
      await this.productDetailSeed.seed();
      await this.blogSeed.seed();
      console.log('Database had been inited');
    } catch (error) {
      console.log(error);
    }
  }
}
