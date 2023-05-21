import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserSchema } from './user.schema';
import { UserService } from './user.service.ts';
import { NationalitiesModule } from '../nacionalities/nationalities.module';
import { OccupationModule } from '../occupations/occupation.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    NationalitiesModule,
    OccupationModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserModule]
})
export class UserModule {}