import { CreateClientDto } from '../dto/create-client.dto';

export interface PaymentGateway {
  createClient(data: CreateClientDto): Promise<any>;
  getClients(): Promise<any>;
}
