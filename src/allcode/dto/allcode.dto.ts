import { IsNotEmpty } from 'class-validator';

export class AllcodeDto {
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  value: string;
  code?: string;
  parentCode?: string;
  hexCode?: string;
  createdAt: Date;
  updatedAt?: Date;
}
