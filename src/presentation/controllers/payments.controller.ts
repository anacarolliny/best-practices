import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateClientUseCase } from '../../application/use-cases/create-client.use-case';
import { CreateClientDto } from '../../application/dto/create-client.dto';
import { GetClientUseCase } from 'src/application/use-cases/get-client.use-case';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly getClientsUseCase: GetClientUseCase,
  ) {}

  @Post('clients')
  createClient(@Body() dto: CreateClientDto) {
    return this.createClientUseCase.execute(dto);
  }

  @Get('clients')
  getClients() {
    return this.getClientsUseCase.execute();
  }
}
