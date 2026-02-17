import { Module } from '@nestjs/common';
import { PaymentsService } from './services/payments.service';
import { PaymentsController } from './payments.controller';
import { AbacatePayProvider } from './services/abacate-pay.provider';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    {
      provide: 'IPaymentService',
      useClass: AbacatePayProvider,
    },
  ],
})
export class PaymentsModule {}
