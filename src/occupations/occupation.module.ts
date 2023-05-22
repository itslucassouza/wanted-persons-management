import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OccupationSchema } from './occupations.schema';
import { OccupationService } from './occupation.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Occupation', schema: OccupationSchema }]),
  ],
  controllers: [],
  providers: [OccupationService],
  exports: [OccupationService]
  })
export class OccupationModule {}