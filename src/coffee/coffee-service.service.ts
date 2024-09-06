import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeServiceService {
  private coffees: Coffee[] = [
    { id: 1, name: 'tea', price: 50 },
    { id: 2, name: 'moka', price: 50 },
    { id: 3, name: 'coffee', price: 50 },
  ];

  create(coffee: Coffee) {
    const newCoffee = {
      ...coffee,
      id: Math.floor(Math.random() * 1000),
    };
    this.coffees.push(newCoffee);
    return newCoffee;
  }

  get() {
    return this.coffees;
  }
  getById(id: number) {
    return this.coffees.find((coffee) => coffee.id === id);
  }
}

export type Coffee = {
  id: number;
  name: string;
  price: number;
};
