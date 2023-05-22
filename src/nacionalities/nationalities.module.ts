import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NationalityService } from './nationalities.service';
import { NationalitySchema } from './nacionalities.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Nationality', schema: NationalitySchema }]),
  ],
  controllers: [],
  providers: [NationalityService],
  exports: [NationalityService]
  })
export class NationalitiesModule {}