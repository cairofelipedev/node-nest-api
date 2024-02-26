import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StoresModule  } from './stores.module';

@Controller('stores')
export class StoresController {
  private stores: StoresModule [] = [];

  @Get()
  findAll(): StoresModule [] {
    return this.stores;
  }

  @Get(':id')
  findOne(@Param('id') id: string): StoresModule  {
    return this.stores.find(store => store.id === +id);
  }

  @Post()
  create(@Body() store: StoresModule ): StoresModule  {
    store.id = this.stores.length + 1;
    this.stores.push(store);
    return store;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedstore: StoresModule ): StoresModule  {
    const index = this.stores.findIndex(store => store.id === +id);
    if (index !== -1) {
      this.stores[index] = { ...this.stores[index], ...updatedstore };
      return this.stores[index];
    } else {
      throw new Error('store not found');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    const index = this.stores.findIndex(store => store.id === +id);
    if (index !== -1) {
      this.stores.splice(index, 1);
      return 'store deleted successfully';
    } else {
      throw new Error('store not found');
    }
  }
}