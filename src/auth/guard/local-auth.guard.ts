import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LocalStrategy } from '../strategy/local.strategy';
import { User } from 'src/user/entities/user.entity';
import { Request } from 'express';

@Injectable()
export class LocalAuthGuard implements CanActivate {
  constructor(private localStrategy: LocalStrategy) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { email, password } = request.body;
    const validate = this.validateUser(email, password, request);
    return validate;
  }
  async validateUser(
    email: string,
    password: string,
    req: Request,
  ): Promise<boolean> {
    const user: User = await this.localStrategy.validate(email, password);
    req.user = user;
    if (user) {
      return true;
    }
    return false;
  }
}
