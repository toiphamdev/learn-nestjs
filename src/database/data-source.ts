import { DataSourceOptions, DataSource } from 'typeorm';

import { User } from '../user/entities/user.entity';
import { Product } from '../product/entities/product.entity';
import { ProductDetail } from '../product/entities/product-detail.entity';
import { ProductDetailSize } from '../product/entities/product-detail-size.entity';
import { UserAddress } from '../user/entities/user-address.entity';
import { Allcode } from '../allcode/entities/allcode.entity';
import { Banner } from '../banner/entities/banner.entity';
import { Comment } from '../comment/entities/comment.entity';
import { Blog } from '../blog/entities/blog.entity';
import { Voucher } from '../voucher/entities/voucher.entity';
import { VoucherUsed } from '../voucher/entities/voucher-used.entity';
import { TypeVoucher } from '../voucher/entities/type-voucher.entity';
import { Order } from '../order/entity/order.enitity';
import { TypeShip } from '../order/entity/type-ship.entity';
import { OrderDetail } from '../order/entity/order-detail.entity';
import { Message } from '../message/entities/message.entity';
import { RoomMessage } from '../message/entities/room-message.entity';
import { Receipt } from '../receipt/entities/reciept.entity';
import { Supplier } from '../supplier/entities/supplier.entity';
import { ReceiptDetail } from '../receipt/entities/reciept-detail.entity';
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}/${process.env.POSTGRES_DB}`,
  entities: [
    User,
    Blog,
    Voucher,
    VoucherUsed,
    TypeVoucher,
    TypeShip,
    Order,
    OrderDetail,
    RoomMessage,
    Message,
    Allcode,
    UserAddress,
    Receipt,
    ReceiptDetail,
    Supplier,
    Comment,
    Banner,
    Product,
    ProductDetail,
    ProductDetailSize,
  ],
  migrations: ['dist/database/migrations/*.js'],
};

export const dataSource = new DataSource(dataSourceOptions);
