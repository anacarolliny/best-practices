import { Injectable } from '@nestjs/common';
import { PaymentGateway } from '../../application/interfaces/payment-gateway.interface';
import { HttpClientService } from '../http/http-client.service';
import { CreateClientDto } from 'src/application/dto/create-client.dto';

@Injectable()
export class AbacatePayProvider implements PaymentGateway {
  private readonly baseUrl = 'https://api.abacatepay.com/v1';
  private readonly apiKey = process.env.ABACATE_PAY_KEY;

  private readonly http;

  constructor(private readonly httpClient: HttpClientService) {
    this.http = this.httpClient.create(this.baseUrl, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  createClient(data: CreateClientDto) {
    return this.httpClient.request(this.http, {
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

  getClients() {
    console.log(
      'Fetching clients from AbacatePay...',
      this.baseUrl,
      this.apiKey,
    );
    return this.httpClient.request(this.http, {
      method: 'GET',
      url: 'customer/list',
    });
  }
}
