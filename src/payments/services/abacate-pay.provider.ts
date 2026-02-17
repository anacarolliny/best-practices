import { Injectable } from '@nestjs/common';
import { HttpBase } from 'src/shared/http-base';
import { GatewayProvider } from './interfaces/gateway-interface.provider';
import { CreateClientDto } from '../dto/create-client.dto';

@Injectable()
export class AbacatePayProvider extends HttpBase implements GatewayProvider {
  private readonly baseUrl = 'https://api.abacatepay.com/v1';
  private readonly apiKey = process.env.ABACATE_PAY_KEY;
  constructor() {
    super(this.baseUrl, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }
  createClient(data: CreateClientDto): Promise<any> {
    return this.request({
      method: 'POST',
      url: 'customer/create',
      data: {
        name: data.name,
        cellphone: data.phone,
        email: data.email,
        taxId: data.document,
      },
    });
  }
}
