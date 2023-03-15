import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;
@Schema()
export class Order {
  @Prop()
  dishes: [];

  @Prop()
  tablenumber: number;

  @Prop()
  totalprice: number;

  @Prop()
  creationdate: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
