import { IsNotEmpty } from 'class-validator';

export class UpdateAllcodeDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  value: string;
  code?: string;
  parenCode?: string;
  updatedAt?: Date;
}
