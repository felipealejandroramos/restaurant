import { Controller, Get } from '@nestjs/common';
import { Dish } from 'src/shemas/dishschema';
import { DishService } from './dish.service';
@Controller('dishes')
export class DishController {
  constructor(private readonly dishService: DishService) {}
  @Get()
  getdishess(): Promise<Dish[]> {
    return this.dishService.getdishess();
  }
}
