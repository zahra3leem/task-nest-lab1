import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeServiceService } from './coffee/coffee-service.service';
import { UserService } from './users/user.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, CoffeeController],
  providers: [AppService, CoffeeServiceService, UserService],
})
export class AppModule {}
