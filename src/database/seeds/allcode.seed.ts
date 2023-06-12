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
      ];
      console.log('Seed data allcodes created successfully.');
    } else {
      console.log('Seed data allcodes already exists.');
    }
  }
}
