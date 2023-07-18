import { Injectable } from '@nestjs/common';
import { Users } from './users.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userModel: Repository<Users>) {}

  findUsers() {
    return this.userModel.find();
  }

  createUser(userDetail: CreateUserDto) {
    const user = this.userModel.create({ ...userDetail });
    return this.userModel.save(user)
  }
}
