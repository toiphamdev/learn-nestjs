import { Injectable } from '@nestjs/common';
import { UserSeed } from './seeds/user.seed';
import { UserAddressSeed } from './seeds/user-address.seed';
import { TypeShipSeed } from './seeds/type-ship.seed';

@Injectable()
export class DatabaseService {
  constructor(
    private readonly userSeed: UserSeed,
    private readonly userAddressSeed: UserAddressSeed,
    private readonly typeShipSeed: TypeShipSeed,
  ) {}
  async initialData(): Promise<void> {
    await this.userSeed.seed();
    await this.userAddressSeed.seed();
    await this.typeShipSeed.seed();
  }
}
