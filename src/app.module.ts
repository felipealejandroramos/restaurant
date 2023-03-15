import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishModule } from './dishes/dish.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/order.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://app:app@cluster0.evzpwjo.mongodb.net/?retryWrites=true&w=majorit',
    ),
    OrdersModule,
    DishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
