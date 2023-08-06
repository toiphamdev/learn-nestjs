import { Role } from '../entities/roles.enum';

export class SearchUsersDto {
  name?: string;
  statusId?: string;
  size?: number;
  page?: number;
  roleId?: Role;
}
