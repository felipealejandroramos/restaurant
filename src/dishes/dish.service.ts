import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dish, DishDocument } from '../shemas/dishschema';
@Injectable()
export class DishService {
  constructor(@InjectModel(Dish.name) private dishModel: Model<DishDocument>){}
  async getdishess(): Promise<Dish[]> {
    return this.dishModel.find().exec();
  }
}
