import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/jobber-auth/index.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  // automatically connect to the database when the module is initialized
  async onModuleInit() {
    await this.$connect();
  }
}
