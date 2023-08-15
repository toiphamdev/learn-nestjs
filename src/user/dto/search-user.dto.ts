import { Role } from '../entities/roles.enum';

export interface SearchUsersDto {
  name?: string;
  statusId?: string;
  size?: number;
  page?: number;
  roleId?: Role;
}
