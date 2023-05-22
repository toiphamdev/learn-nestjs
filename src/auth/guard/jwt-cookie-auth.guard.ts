import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtCookieAuthGuard extends AuthGuard('jwt-cookie') {}
