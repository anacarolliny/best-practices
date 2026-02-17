import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './services/payments.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('client')
  createClient(@Body() createClientDto: CreateClientDto) {
    return this.paymentsService.createClient(createClientDto);
  }

  @Post('webhook/abacatepay')
  handleWebhook(@Body() payload: any) {
    // Handle webhook payload from payment provider
    console.log('Received webhook:', payload);
    return { status: 'Webhook received' };
  }
}
