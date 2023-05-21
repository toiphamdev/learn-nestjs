import { Expose, Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, MinLength, IsEnum } from 'class-validator';
import { ObjectId } from 'typeorm';

export enum Role {
  USER = 'USER',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
}
export class UserDto {
  @Expose()
  id: ObjectId;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  @Expose()
  fullName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @Expose()
  role: Role = Role.USER;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
