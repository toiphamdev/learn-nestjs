import { Injectable } from '@nestjs/common';
import { UserSeed } from './seeds/user.seed';
import { UserAddressSeed } from './seeds/user-address.seed';

@Injectable()
export class DatabaseService {
  constructor(
    private readonly userSeed: UserSeed,
    private readonly userAddressSeed: UserAddressSeed,
  ) {}
  async initialData(): Promise<void> {
    await this.userSeed.seed();
    await this.userAddressSeed.seed();
  }
}
