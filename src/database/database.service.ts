import { Injectable } from '@nestjs/common';
import { UserSeed } from './seeds/user.seed';

@Injectable()
export class DatabaseService {
  constructor(private readonly userSeed: UserSeed) {}
  async initialData(): Promise<void> {
    await this.userSeed.seed();
  }
}
