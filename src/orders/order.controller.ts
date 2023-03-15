import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Order } from 'src/shemas/orderschema';
import { OrdersService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrdersService) {}

  @Get()
  getorderes(): Promise<Order[]> {
    return this.orderService.getorders();
  }

  @Post()
  insertorder(@Body() neworder): void {
    this.orderService.create(neworder);
  }
}
