import { IsNotEmpty } from 'class-validator';

export class BannerDto {
  description?: string;
  @IsNotEmpty()
  name: string;
  statusId?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}
