import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceiptDetail } from './entities/reciept-detail.entity';
import { Repository } from 'typeorm';
import { ReceiptDetailDto } from './dto/receipt-detail.dto';
import { MyGateway } from 'src/socket/socket.gateway';
import { ProductDetailSize } from 'src/product/entities/product-detail-size.entity';
import { Receipt } from './entities/reciept.entity';
import { QueryReceiptDto } from './dto/query-receipt.dto';
@Injectable()
export class ReceiptDetailService {
  constructor(
    @InjectRepository(ReceiptDetail)
    private readonly receiptDetailRepo: Repository<ReceiptDetail>,
    @InjectRepository(ProductDetailSize)
    private readonly productDetailSizeRepo: Repository<ProductDetailSize>,
    @InjectRepository(Receipt)
    private readonly receiptRepo: Repository<Receipt>,
    private readonly socketGateway: MyGateway,
  ) {}

  async createReceiptDetail(
    userId: number,
    rcDetail: ReceiptDetailDto,
  ): Promise<{ error: boolean; message: string }> {
    try {
      const receipt = await this.receiptRepo.findOne({
        where: { id: rcDetail.receiptId },
      });
      if (!receipt || receipt.userId !== userId) {
        return {
          error: true,
          message: 'You are not create this receipt.',
        };
      }
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
        this.socketGateway.server.emit('productUpdated', {
          productId: product.productDetail.product.id,
        });
        return {
          error: false,
          message: 'success',
        };
      }
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }

  async updateReceiptDetail(
    id: number,
    userId: number,
    rcDetail: ReceiptDetailDto,
  ): Promise<{ error: boolean; message: string }> {
    try {
      const receipt = await this.receiptRepo.findOne({
        where: { id: rcDetail.receiptId },
      });
      if (!receipt || receipt.userId !== userId) {
        return {
          error: true,
          message: 'You are not create this receipt.',
        };
      }
      const oldReceiptDetail = await this.receiptDetailRepo.findOne({
        where: { id },
      });
      oldReceiptDetail.updatedAt = new Date();
      const addedQuantity = rcDetail.quantity - oldReceiptDetail.quantity;
      oldReceiptDetail.price = rcDetail.price;
      oldReceiptDetail.productDetailSizeId = rcDetail.productDetailSizeId;
      oldReceiptDetail.receiptId = rcDetail.receiptId;
      oldReceiptDetail.quantity = rcDetail.quantity;
      await this.receiptDetailRepo.save(oldReceiptDetail);
      const product = await this.productDetailSizeRepo
        .createQueryBuilder('product_detail_size')
        .leftJoinAndSelect('product_detail_size.productDetail', 'productDetail')
        .leftJoinAndSelect('productDetail.product', 'product')
        .select(['product', 'product_detail_size', 'productDetail'])
        .where('product_detail_size.id = :id', {
          id: rcDetail.productDetailSizeId,
        })
        .getOne();
      product.quantity = product.quantity + addedQuantity;
      await this.productDetailSizeRepo.save(product);
      this.socketGateway.server.emit('productUpdated', {
        productId: product.productDetail.product.id,
      });
      return {
        message: 'success',
        error: false,
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }

  async deleteReceiptDetail(
    id: number,
    userId: number,
  ): Promise<{ error: boolean; message: string }> {
    try {
      const receipt = await this.receiptDetailRepo
        .createQueryBuilder('receipt_detail')
        .leftJoinAndSelect('receipt_detail.receipt', 'receipt')
        .where('receipt_detail.id = :id', { id })
        .getOne();
      if (!receipt || receipt.receipt.userId !== userId) {
        return {
          error: true,
          message: 'You are not create this receipt.',
        };
      }
      const receiptDetail = await this.receiptDetailRepo.findOne({
        where: { id },
      });
      await this.receiptDetailRepo.delete(id);
      const product = await this.productDetailSizeRepo
        .createQueryBuilder('product_detail_size')
        .leftJoinAndSelect('product_detail_size.productDetail', 'productDetail')
        .leftJoinAndSelect('productDetail.product', 'product')
        .select(['product', 'product_detail_size', 'productDetail'])
        .where('product_detail_size.id = :id', {
          id: receiptDetail.productDetailSizeId,
        })
        .getOne();
      product.quantity = product.quantity - receiptDetail.quantity;
      await this.productDetailSizeRepo.save(product);
      this.socketGateway.server.emit('productUpdated', {
        productId: product.productDetail.product.id,
      });
      return {
        error: false,
        message: 'success',
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }
  async getAllReceipt(receiptId: number, query: QueryReceiptDto) {
    try {
      if (!query.page || !query.size) {
        query.page = 1;
        query.size = 10;
      }
      const queryBuilder =
        this.receiptDetailRepo.createQueryBuilder('receipt_detail');
      Object.entries(query).reduce((result, [key, value]) => {
        if (key.startsWith('sort')) {
          const newKey = key.replace('sort', '');
          queryBuilder.orderBy(`receipt_detail.${newKey}`, value);
          result.push({ [newKey]: value });
        }
        return result;
      }, []);
      const skip = (query.page - 1) * query.size;
      const receipts = await queryBuilder
        .skip(skip)
        .take(query.size)
        .where('receipt_detail.receiptId = :id', { id: receiptId })
        .getManyAndCount();
      return {
        data: receipts[0],
        meta: {
          current: query.page,
          size: query.size,
          totalItems: receipts[1],
        },
      };
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Some thing went wrong!');
    }
  }
}
