import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddress } from '../../user/entities/user-address.entity';
import { Repository } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Injectable()
export class UserAddressSeed {
  constructor(
    @InjectRepository(UserAddress)
    private userAddressRepository: Repository<UserAddress>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async seed(): Promise<void> {
    const existingUserAddress = await this.userAddressRepository.count();
    if (existingUserAddress === 0) {
      const users = await this.userRepository.find();
      if (users.length > 0) {
        const useraddress = users.map((item) => {
          const address = new UserAddress();
          address.userId = item.id;
          address.shipName = 'Anh Bảy Gà';
          address.createdAt = new Date();
          address.createdAt = new Date();
          address.shipPhoneNumber = '2239283282';
          address.shipAddress =
            'Xã Bà Điểm, Huyện Hóc Môn, Quận 12, Thành phos Hồ Chí Minh';
          address.shipEmail = 'example@gmail.com';
          return address;
        });
        await this.userAddressRepository.save(useraddress);
      }
      console.log('Seed data useraddress created successfully.');
    } else {
      console.log('Seed data useraddress already exists.');
    }
  }
}
