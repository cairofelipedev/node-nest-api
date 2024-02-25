import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class StoresModule {
  constructor(private prisma: PrismaService) {}

  async create(store: Prisma.StoreCreateInput) {
    return await this.prisma.store.create({ data: store });
  }

  async findAll() {
    return await this.prisma.store.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.store.findUnique({ where: { id: Number(id) } });
  }

  async update(id: number, store: Prisma.StoreCreateInput) {
    return await this.prisma.store.update({
      where: { id: Number(id) },
      data: {
        name: store.name,
        description: store.description,
        type: store.type,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.store.delete({ where: { id: Number(id) } });
  }
}
