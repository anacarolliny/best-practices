import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from './infrastructure/cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PaymentsModule,
    CacheModule,
  ],
})
export class AppModule {}
