import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceiptDetail } from './entities/reciept-detail.entity';
import { Repository } from 'typeorm';
import { ReceiptDetailDto } from './dto/receipt-detail.dto';
import { MyGateway } from 'src/socket/socket.gateway';
import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';
@Injectable()
export class ReceiptDetailService {
  constructor(
    @InjectRepository(ReceiptDetail)
    private readonly receiptDetailRepo: Repository<ReceiptDetail>,
    @InjectRepository(ProductDetailSize)
    private readonly productDetailSizeRepo: Repository<ProductDetailSize>,
    private readonly socketGateway: MyGateway,
  ) {}

  async createReceiptDetail(rcDetail: ReceiptDetailDto) {
    try {
      rcDetail.createdAt = new Date();
      rcDetail.updatedAt = new Date();
      const created = await this.receiptDetailRepo.save(rcDetail);
      if (created) {
        const product = await this.productDetailSizeRepo
          .createQueryBuilder('product_detail_size')
          .leftJoinAndSelect(
            'product_detail_size.productDetail',
            'productDetail',
          )
          .leftJoinAndSelect('productDetail.product', 'product')
          .select(['product', 'product_detail_size', 'productDetail'])
          .where('product_detail_size.id = :id', {
            id: created.productDetailSizeId,
          })
          .getOne();
        product.quantity = product.quantity + rcDetail.quantity;
        await this.productDetailSizeRepo.save(product);
        this.socketGateway.server.send('productUpdated', {
          productId: product.productDetail.product.id,
        });
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }
}
