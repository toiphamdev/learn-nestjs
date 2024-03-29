import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Allcode } from '../../allcode/entities/allcode.entity';
import { Repository } from 'typeorm';
import { AllcodeDto } from '../../allcode/dto/allcode.dto';
import { Gender } from '../../user/entities/genders.enum';

@Injectable()
export class AllcodeSeed {
  constructor(
    @InjectRepository(Allcode)
    private allCodeRepository: Repository<Allcode>,
  ) {}

  async seed(): Promise<void> {
    const existingAllcode = await this.allCodeRepository.count();
    if (existingAllcode === 0) {
      const allcodes: AllcodeDto[] = [
        {
          code: Gender.MALE,
          type: 'GENDER',
          value: 'Nam',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: Gender.ORTHER,
          type: 'GENDER',
          value: 'Khác',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: Gender.FEMALE,
          type: 'GENDER',
          value: 'Nữ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'GHN',
          type: 'TYPE_SHIP',
          value: 'Giao hàng nhanh',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'GHTK',
          type: 'TYPE_SHIP',
          value: 'Giao hàng tiết kiệm',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'GHSE',
          type: 'TYPE_SHIP',
          value: 'Giao hàng Shoppe Express',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'PERCENT',
          type: 'TYPE_VOUCHER',
          value: 'Phần trăm',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'CASH',
          type: 'TYPE_VOUCHER',
          value: 'Tiền mặt',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'DRAFT',
          type: 'STATUS',
          value: 'Bản nháp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ACTIVE',
          type: 'STATUS',
          value: 'Hoạt động',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'INACTIVE',
          type: 'STATUS',
          value: 'Không hoạt động',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'DELETED',
          type: 'STATUS',
          value: 'Đã xóa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'xu-huong-thoi-trang',
          type: 'SUBJECT',
          value: 'Xu hướng thời trang',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'thoi-trang-cho-dip-dac-biet',
          type: 'SUBJECT',
          value: 'Thời trang cho dịp đặc biệt',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'huong-dan-phoi-do',
          type: 'SUBJECT',
          value: 'Hướng dẫn phối đồ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'san-pham-moi',
          type: 'SUBJECT',
          value: 'Sản phẩm mới',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'thuong-hieu',
          type: 'SUBJECT',
          value: 'Thương hiệu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'su-kien-va-giam-gia',
          type: 'SUBJECT',
          value: 'Sự kiện và giảm giá',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'phu-kien-thoi-trang',
          type: 'SUBJECT',
          value: 'Phụ kiện thời trang',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'canifa',
          type: 'BRAND',
          value: 'Canifa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'yody',
          type: 'BRAND',
          value: 'YODY',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'WAIT_FOR_COMFIRMATION',
          type: 'STATUS_ORDER',
          value: 'Chờ xác nhận',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'DELIVERING',
          type: 'STATUS_ORDER',
          value: 'Đang giao',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'DELIVERED',
          type: 'STATUS_ORDER',
          value: 'Đã giao hàng',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'WAIT_FOR_PAYMENT',
          type: 'STATUS_ORDER',
          value: 'Đã giao hàng',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'CANCEL',
          type: 'STATUS_ORDER',
          value: 'Hủy đơn',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'do',
          type: 'COLOR',
          value: 'Đỏ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'xanh',
          type: 'COLOR',
          value: 'Xanh',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ON',
          type: 'STATUS_USER',
          value: 'Online',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'OFF',
          type: 'STATUS_USER',
          value: 'Offline',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'BLOCK',
          type: 'STATUS_USER',
          value: 'Block',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'nam',
          type: 'CATEGORY',
          value: 'Nam',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'nu',
          type: 'CATEGORY',
          value: 'Nữ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'tre-em',
          type: 'CATEGORY',
          value: 'Trẻ em',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ao-nam',
          type: 'CATEGORY',
          value: 'Áo Nam',
          parentCode: 'nam',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ao-nu',
          type: 'CATEGORY',
          value: 'Áo Nữ',
          parentCode: 'nu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ao-tre-em',
          type: 'CATEGORY',
          parentCode: 'tre-em',
          value: 'Áo Trẻ Em',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ao-polo-nam',
          type: 'CATEGORY',
          value: 'Áo Polo Nam',
          parentCode: 'ao-nam',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ao-polo-nu',
          type: 'CATEGORY',
          value: 'Áo Polo Nữ',
          parentCode: 'ao-nu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: 'ao-polo-tre-em',
          type: 'CATEGORY',
          value: 'Áo Polo Trẻ Em',
          parentCode: 'ao-tre-em',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      await this.allCodeRepository.save(allcodes);
      console.log('Seed data allcodes created successfully.');
    } else {
      console.log('Seed data allcodes already exists.');
    }
  }
}
