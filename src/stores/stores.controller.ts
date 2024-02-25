import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { StoreService } from '../store.service';
import { Prisma } from '@prisma/client';

@Controller('stores')
export class StoresController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async findAll(): Promise<StoresModule[]> {
    return this.storeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<StoresModule> {
    return this.storeService.findOne(id);
  }

  @Post()
  async create(@Body() store: Prisma.StoreCreateInput): Promise<StoresModule> {
    return this.storeService.create(store);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updatedStore: Prisma.StoreCreateInput): Promise<StoresModule> {
    return this.storeService.update(id, updatedStore);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.storeService.delete(id);
  }
}
