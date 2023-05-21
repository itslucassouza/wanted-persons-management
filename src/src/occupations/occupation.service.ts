import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Occupation, OccupationDocument } from './occupations.schema';

@Injectable()
export class OccupationService {
  constructor(
    @InjectModel(Occupation.name) private readonly nationalityModel: Model<OccupationDocument>,
  ) {}

  async getAll(): Promise<Occupation[]> {
    const nationalities = await this.nationalityModel.find().exec();
    return nationalities;
  }

  async create(name: string): Promise<Occupation> {
    const createdNationality = new this.nationalityModel({ name });
    const savedNationality = await createdNationality.save();
    return savedNationality;
  }
}