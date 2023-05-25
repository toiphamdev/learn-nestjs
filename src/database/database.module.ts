// database.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { DatabaseService } from './database.service';
import { Product } from '../product/entity/product.entity';
import { ProductDetail } from '../product/entity/product-detail.entity';
import { ProductImage } from '../product/entity/product-image.entity';
import { Connection, getConnection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'ecom',
      username: 'root',
      password: null,
      synchronize: true,
      entities: [User, Product, ProductDetail, ProductImage],
      autoLoadEntities: true,
      logging: true,
    }),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly connection: Connection) {}

  onModuleInit() {
    console.log('Database connection has been established');
  }
}
