import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios'
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './src/user/user.controller';
import { UserService } from './src/user/user.service.ts';
import { UserModule } from './src/user/user.module';
import { Module } from '@nestjs/common';
import { NationalitiesModule } from './src/nacionalities/nationalities.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://lucasvini193:qfmBFEjg2EOy5kP4@fiap.zap4r8x.mongodb.net/'),
    HttpModule,
    UserModule,
    NationalitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
