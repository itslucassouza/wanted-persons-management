import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserModule } from './src/user/user.module';
import { NationalitiesModule } from './src/nacionalities/nationalities.module';
import { OccupationModule } from './src/occupations/occupation.module';

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
