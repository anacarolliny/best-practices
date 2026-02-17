import { Inject, Injectable } from '@nestjs/common';
import { GatewayProvider as IPaymentGateway } from './interfaces/gateway-interface.provider';
import { CreateClientDto } from '../dto/create-client.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('IPaymentService') private readonly gatewayService: IPaymentGateway,
  ) {}

  createClient(data: CreateClientDto): Promise<any> {
    return this.gatewayService.createClient(data);
  }
}
