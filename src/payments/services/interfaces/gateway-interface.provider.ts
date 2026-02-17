import { CreateClientDto } from '../../dto/create-client.dto';

export interface GatewayProvider {
  createClient(data: CreateClientDto): Promise<any>;
}
