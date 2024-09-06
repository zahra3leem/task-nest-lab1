import { Injectable } from '@nestjs/common';
import { CoffeeServiceService } from 'src/coffee/coffee-service.service';

@Injectable()
export class UserService {
  private Users: user[] = [];
  constructor(private readonly coffeeService: CoffeeServiceService) {}

  create(user: user) {
    const newUser = {
      ...user,
      id: Math.floor(Math.random() * 1000),
    };
    this.Users.push(newUser);
    return newUser;
  }

  getAll() {
    return this.Users;
  }
  getById(id: number) {
    return this.Users.find((user) => user.id === id);
  }
  delete(id: string) {
    this.Users = this.Users.filter((user) => user.id !== parseInt(id));
    return this.Users;
  }
  update(id: string, user: user) {
    this.Users = this.Users.map((u) => (u.id === parseInt(id)? {...u,...user} : u));
    return this.Users;
  }
  getUserDrinks(id: string) {
    const user = this.getById(parseInt(id));
    const coffeIds = user.favDrinks;
    const coffeeNames = coffeIds.map((id) => {
      return this.coffeeService.getById(id);
    });
    return coffeeNames;
  }
}

export type user = {
  id: number;
  name: string;
  age: number;
  favDrinks: any[];
};
