import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Nationality, NationalityDocument } from './nacionalities.schema';

@Injectable()
export class NationalityService {
  constructor(
    @InjectModel(Nationality.name) private readonly nationalityModel: Model<NationalityDocument>,
  ) {}

  async getAll(): Promise<Nationality[]> {
    const nationalities = await this.nationalityModel.find().exec();
    return nationalities;
  }

  async create(name: string): Promise<Nationality> {
    const createdNationality = new this.nationalityModel({ name });
    const savedNationality = await createdNationality.save();
    return savedNationality;
  }
}