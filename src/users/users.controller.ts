import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService
    ) {}

    @Get("users")
    getUsers() {
        return this.userService.findUsers()
    }

    @Post("register")
    register(@Body() createUserDTO: CreateUserDto) {
        return this.userService.createUser(createUserDTO)
    }
}
