import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}

export class ResponseLoginDto {
  @ApiProperty()
  accessToken: string;
  @ApiProperty({ type: User })
  user: User;
}

export class ResponseRereshTokenDto {
  @ApiProperty()
  accessToken: string;
}
