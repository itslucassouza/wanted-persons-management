import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserModule } from './user/user.module';
import { NationalitiesModule } from './nacionalities/nationalities.module';
import { OccupationModule } from './occupations/occupation.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Configuração do Swagger
   const config = new DocumentBuilder()
   .setTitle('API Documentation')
   .setDescription('API documentation for your application')
   .setVersion('1.0')
   .build();
    const document = SwaggerModule.createDocument(app, config, {
      include: [UserModule, NationalitiesModule, OccupationModule],
    });
    SwaggerModule.setup('api', app, document);
    
  await app.listen(3000);
}
bootstrap();
