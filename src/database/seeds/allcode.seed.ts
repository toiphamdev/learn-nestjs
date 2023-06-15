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
        },
        {
          code: Gender.ORTHER,
          type: 'GENDER',
          value: 'Khác',
          createdAt: new Date(),
        },
        {
          code: Gender.FEMALE,
          type: 'GENDER',
          value: 'Nữ',
          createdAt: new Date(),
        },
        {
          code: 'GHN',
          type: 'TYPE_SHIP',
          value: 'Giao hàng nhanh',
          createdAt: new Date(),
        },
        {
          code: 'GHTK',
          type: 'TYPE_SHIP',
          value: 'Giao hàng tiết kiệm',
          createdAt: new Date(),
        },
        {
          code: 'GHSE',
          type: 'TYPE_SHIP',
          value: 'Giao hàng Shoppe Express',
          createdAt: new Date(),
        },
        {
          code: 'PERCENT',
          type: 'TYPE_VOUCHER',
          value: 'Phần trăm',
          createdAt: new Date(),
        },
        {
          code: 'CASH',
          type: 'TYPE_VOUCHER',
          value: 'Tiền mặt',
          createdAt: new Date(),
        },
        {
          code: 'DRAFT',
          type: 'STATUS_BLOG',
          value: 'Bản nháp',
          createdAt: new Date(),
        },
        {
          code: 'ACTIVE',
          type: 'STATUS_BLOG',
          value: 'Hoạt động',
          createdAt: new Date(),
        },
        {
          code: 'INACTIVE',
          type: 'STATUS_BLOG',
          value: 'Không hoạt động',
          createdAt: new Date(),
        },
        {
          code: 'DELETED',
          type: 'STATUS_BLOG',
          value: 'Đã xóa',
          createdAt: new Date(),
        },
        {
          code: 'ACTIVE',
          type: 'STATUS_BANNER',
          value: 'Hoạt động',
          createdAt: new Date(),
        },
        {
          code: 'INACTIVE',
          type: 'STATUS_BANNER',
          value: 'Không hoạt động',
          createdAt: new Date(),
        },
        {
          code: 'DELETED',
          type: 'STATUS_BANNER',
          value: 'Đã xóa',
          createdAt: new Date(),
        },
        {
          code: 'xu-huong-thoi-trang',
          type: 'SUBJECT',
          value: 'Xu hướng thời trang',
          createdAt: new Date(),
        },
        {
          code: 'thoi-trang-cho-dip-dac-biet',
          type: 'SUBJECT',
          value: 'Thời trang cho dịp đặc biệt',
          createdAt: new Date(),
        },
        {
          code: 'huong-dan-phoi-do',
          type: 'SUBJECT',
          value: 'Hướng dẫn phối đồ',
          createdAt: new Date(),
        },
        {
          code: 'san-pham-moi',
          type: 'SUBJECT',
          value: 'Sản phẩm mới',
          createdAt: new Date(),
        },
        {
          code: 'thuong-hieu',
          type: 'SUBJECT',
          value: 'Thương hiệu',
          createdAt: new Date(),
        },
        {
          code: 'su-kien-va-giam-gia',
          type: 'SUBJECT',
          value: 'Sự kiện và giảm giá',
          createdAt: new Date(),
        },
        {
          code: 'phu-kien-thoi-trang',
          type: 'SUBJECT',
          value: 'Phụ kiện thời trang',
          createdAt: new Date(),
        },
        {
          code: 'canifa',
          type: 'BRAND',
          value: 'Canifa',
          createdAt: new Date(),
        },
        {
          code: 'yody',
          type: 'BRAND',
          value: 'YODY',
          createdAt: new Date(),
        },
        {
          code: 'WAIT_FOR_COMFIRMATION',
          type: 'STATUS_ORDER',
          value: 'Chờ xác nhận',
          createdAt: new Date(),
        },
        {
          code: 'DELIVERING',
          type: 'STATUS_ORDER',
          value: 'Đang giao',
          createdAt: new Date(),
        },
        {
          code: 'DELIVERED',
          type: 'STATUS_ORDER',
          value: 'Đã giao hàng',
          createdAt: new Date(),
        },
        {
          code: 'CANCEL',
          type: 'STATUS_ORDER',
          value: 'Hủy đơn',
          createdAt: new Date(),
        },
      ];
      await this.allCodeRepository.save(allcodes);
      console.log('Seed data allcodes created successfully.');
    } else {
      console.log('Seed data allcodes already exists.');
    }
  }
}
