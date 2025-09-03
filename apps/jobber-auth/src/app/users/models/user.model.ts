import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel extends AbstractModel {
  @Field()
  email!: string;
}
