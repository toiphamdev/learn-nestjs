// database.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { DatabaseService } from './database.service';
import { Product } from '../product/entity/product.entity';
import { ProductDetail } from '../product/entity/product-detail.entity';

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
      entities: [User, Product, ProductDetail],
      logging: true,
    }),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule implements OnModuleInit {
  onModuleInit() {
    console.log('Database conection has been establed');
  }
}
