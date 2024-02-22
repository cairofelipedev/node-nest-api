import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [AuthModule, StoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
