import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}
  create(store: Prisma.StoreCreateInput) {
    return this.prisma.store.create({ data: store });
  }
}
