import {
  AuthenticationRequest,
  AuthenticationResponse,
  AuthServiceController,
  AuthServiceControllerMethods,
} from '@jobber/nestjs';
import { Controller, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { TokenPayload } from './token-payload.interface';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  authenticate(
    request: AuthenticationRequest & { user: TokenPayload }
  ):
    | Promise<AuthenticationResponse>
    | Observable<AuthenticationResponse>
    | AuthenticationResponse {
    return this.userService.getUser({ id: request.user.userId });
  }
}
