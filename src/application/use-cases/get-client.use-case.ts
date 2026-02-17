import { PaymentGateway } from './../interfaces/payment-gateway.interface';

import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetClientUseCase {
  constructor(
    @Inject('PaymentGateway') private readonly gateway: PaymentGateway,
  ) {}

  execute() {
    return this.gateway.getClients();
  }
}
