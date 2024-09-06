import { Body, Controller, Get, Post } from '@nestjs/common';
import {CoffeeServiceService} from './coffee-service.service';

@Controller('coffee')
export class CoffeeController {
   private service;
   constructor (private readonly cofeeService: CoffeeServiceService) {}

    @Get()
    getAllcoffeess(){
        return this.cofeeService.get();
    }

    @Post()
  createCoffee(@Body() body) {
    console.log(body);

    return this.cofeeService.create(body);
  }
   }

