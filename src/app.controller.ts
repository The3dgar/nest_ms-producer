import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('message_printed')
  // @EventPattern('message_printeds')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data.text);
  }

}
