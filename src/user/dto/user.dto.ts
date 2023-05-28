import { Expose, Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '../entity/roles.enum';

export class UserDto {
  @Expose()
  id: number;
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
  roleId: Role = Role.USER;
  @Expose()
  genderId?: string;
  @Expose()
  phoneNumber: string;
  @Expose()
  image: string;
  @Expose()
  dob: string;
  @Expose()
  statusId: string;
  @Expose()
  token: string;
  @Expose()
  isActiveEmail: boolean;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
}
