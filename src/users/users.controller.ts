import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllusers() {
    return this.userService.getAll();
  }

  @Post()
  createuser(@Body() body) {
    console.log(body);

    return this.userService.create(body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: any) {
    return this.userService.update(id, user);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Get(':id/coffe')
  getUserCoffee(@Param('id') id: string) {
    return this.userService.getUserDrinks(id);
  }
}
