import { IsNotEmpty } from 'class-validator';

export class AllcodeDto {
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  value: string;
  code?: string;
  parentCode?: string;
  createdAt: Date;
  updatedAt?: Date;
}
