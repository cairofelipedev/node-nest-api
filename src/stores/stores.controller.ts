//user.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { StoreService } from './stores.service';
import { Prisma } from '@prisma/client';

@Controller('Store')
export class StoreController {
  constructor(private readonly StoreService: StoreService) {}

  @Post()
  create(@Body() store: Prisma.StoreCreateInput) {
    return this.StoreService.create(store);
  }
}
