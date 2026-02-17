import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PaymentsModule,
  ],
})
export class AppModule {}
