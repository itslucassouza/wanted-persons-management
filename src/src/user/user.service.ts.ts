import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../DTO/user.dto';
import { User } from './user.schema';
import { dataMock } from 'src/data';
import {  removeQuotesFromKeysInArray } from '../utils/formatJson';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(users: User[]): Promise<User[]> {
    const createdUsers = [];

    for (const user of users) {
      const createdUser = new this.userModel(user);
      const savedUser = await createdUser.save();
      createdUsers.push(savedUser);
    }

    return createdUsers;
  }

  async findAllUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async findByUsername(startsWith: string): Promise<User[]> {
    const users = await this.userModel
      .find({ title: { $regex: `^${startsWith}`, $options: 'i' } })
      .exec();
    return users;
  }
  
  async findByOccupation(startsWith: string): Promise<User[]> {
    const users = await this.userModel
      .find({ occupations: { $regex: `^${startsWith}`, $options: 'i' } })
      .exec();
    return users;
  }

  async findByNationality(nationality: string): Promise<User[]> {
    const users = await this.userModel.find({ nationality }).exec();
    return users;
  }

}