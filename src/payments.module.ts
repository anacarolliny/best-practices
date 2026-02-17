import { Module } from '@nestjs/common';
import { PaymentsController } from './presentation/controllers/payments.controller';
import { HttpModule } from 'src/infrastructure/http/http.module';
import { CreateClientUseCase } from 'src/application/use-cases/create-client.use-case';
import { AbacatePayProvider } from 'src/infrastructure/gateways/abacate-pay.provider';
import { GetClientUseCase } from './application/use-cases/get-client.use-case';

@Module({
  imports: [HttpModule],
  controllers: [PaymentsController],
  providers: [
    CreateClientUseCase,
    GetClientUseCase,
    {
      provide: 'PaymentGateway',
      useClass: AbacatePayProvider,
    },
  ],
})
export class PaymentsModule {}
