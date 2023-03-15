/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Dish, DishSchema } from 'src/shemas/dishschema';
import { DishController } from './dish.controller';
import { DishService } from './dish.service';
@Module({
  imports: [MongooseModule.forFeature([{name: Dish.name, schema:DishSchema}])],
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
