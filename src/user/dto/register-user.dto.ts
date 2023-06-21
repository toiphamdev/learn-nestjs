import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '../entities/roles.enum';

export class RegisterUserDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  roleId: Role = Role.USER;
  genderId?: string;
  phoneNumber: string;
  image?: string;
  statusId: string;
  createdAt: Date;
  @Expose()
  updatedAt?: Date;
}
