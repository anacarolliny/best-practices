import { Inject, Injectable } from '@nestjs/common';
import { PaymentGateway } from '../interfaces/payment-gateway.interface';
import { CreateClientDto } from 'src/application/dto/create-client.dto';

@Injectable()
export class CreateClientUseCase {
  constructor(
    @Inject('PaymentGateway')
    private readonly gateway: PaymentGateway,
  ) {}

  execute(data: CreateClientDto) {
    return this.gateway.createClient(data);
  }
}
