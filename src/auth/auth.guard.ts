import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LocalStrategy } from './local.strategy';
import { plainToClass } from 'class-transformer';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class CustomAuthGuard implements CanActivate {
  constructor(private localStrategy: LocalStrategy) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Thực hiện xác thực tùy chỉnh ở đây
    const request = context.switchToHttp().getRequest();
    const { email, password } = request.body;
    const user = this.localStrategy.validate(email, password);
    if (user) {
      request.user = plainToClass(UserDto, user);
      return true;
    } else {
      return false;
    }
  }
}
