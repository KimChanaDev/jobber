import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client/jobber-auth/index.js';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(userData: Prisma.UserCreateInput) {
    const user = await this.prismaService.user.create({
      data: {
        ...userData,
        password: await hash(userData.password, 10),
      },
    });
    return user;
  }

  async getAllUsers() {
    return this.prismaService.user.findMany();
  }

  async getUser(args: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUniqueOrThrow({
      where: args,
    });
  }
}
