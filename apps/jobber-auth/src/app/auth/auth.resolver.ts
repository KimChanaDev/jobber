import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserModel } from '../users/models/user.model';
import { LoginInput } from './dto/login.input';
import type { GqlContext } from '@jobber/nestjs';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserModel)
  async login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() context: GqlContext
  ) {
    return this.authService.login(loginInput, context.res);
  }
}
