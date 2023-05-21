enum Role {
  USER = 'USER',
  SELLER = 'SELLER',
  ADMIN = 'ADMIN',
}
export class UserDto {
  fullName: string;
  email: string;
  password: string;
  role: Role = Role.USER;
}
