// database.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';
import { dataSourceOptions } from './data-source';
import { UserSeed } from './seeds/user.seed';
import { User } from '../user/entities/user.entity';
import { Product } from '../product/entities/product.entity';
import { UserAddress } from '../user/entities/user-address.entity';
import { UserAddressSeed } from './seeds/user-address.seed';
import { TypeShipSeed } from './seeds/type-ship.seed';
import { TypeShip } from '../order/entity/type-ship.entity';
import { TypeVoucher } from '../voucher/entities/type-voucher.entity';
import { TypeVoucherSeed } from './seeds/type-voucher.seed';
import { Supplier } from '../receipt/entities/supplier.entity';
import { SupplierSeed } from './seeds/supplier.seed';
import { BannerSeed } from './seeds/banner.seed';
import { Banner } from '../banner/entities/banner.entity';
import { AllcodeSeed } from './seeds/allcode.seed';
import { Allcode } from '../allcode/entities/allcode.entity';
import { ProductSeed } from './seeds/product.seed';
import { ProductDetailSeed } from './seeds/product-detail.seed';
import { ProductDetail } from '../product/entities/product-detail.entity';
import { SearchModule } from 'src/search/search.module';
import { Blog } from 'src/blog/entities/blog.entity';
import { BlogSeed } from './seeds/blog.seed';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...dataSourceOptions,
        autoLoadEntities: true, //Do not equa true in production
        synchronize: true, //Do not equa true in production
      }),
      imports: undefined,
    }),
    TypeOrmModule.forFeature([
      User,
      Product,
      UserAddress,
      TypeShip,
      TypeVoucher,
      Supplier,
      Banner,
      Allcode,
      Product,
      ProductDetail,
      Blog,
    ]),
    SearchModule,
  ],
  providers: [
    UserSeed,
    DatabaseService,
    UserAddressSeed,
    TypeShipSeed,
    TypeVoucherSeed,
    SupplierSeed,
    BannerSeed,
    AllcodeSeed,
    ProductSeed,
    ProductDetailSeed,
    BlogSeed,
  ],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly databaseService: DatabaseService) {}
  async onModuleInit() {
    console.log('Database connection has been established');
    this.databaseService.initialData();
  }
}
