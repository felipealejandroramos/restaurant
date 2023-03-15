import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from 'src/shemas/orderschema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}
  async getorders(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }
  async create(order): Promise<Order> {
    const neworder = new this.orderModel(order);
    return neworder.save()
  }
}
