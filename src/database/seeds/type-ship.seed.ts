import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeShip } from '../../order/entity/type-ship.entity';

@Injectable()
export class TypeShipSeed {
  constructor(
    @InjectRepository(TypeShip)
    private typeShipRepository: Repository<TypeShip>,
  ) {}

  async seed(): Promise<void> {
    const existingTypeShip = await this.typeShipRepository.count();
    if (existingTypeShip === 0) {
      const typeships = [
        {
          typeId: 'GHTK',
          price: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: 'GHN',
          price: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: 'GHSE',
          price: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      await this.typeShipRepository.save(typeships);
      console.log('Seed data typeships created successfully.');
    } else {
      console.log('Seed data typeships already exists.');
    }
  }
}
