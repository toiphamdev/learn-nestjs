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
    TypeOrmModule.forFeature([User, Product, UserAddress]),
  ],
  providers: [UserSeed, DatabaseService, UserAddressSeed],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly databaseService: DatabaseService) {}
  async onModuleInit() {
    console.log('Database connection has been established');
    this.databaseService.initialData();
  }
}
