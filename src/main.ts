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
   .setTitle('Fiap')
   .setDescription('Procurados pelo FBI e Interpol')
   .setVersion('1.0')
   .build();
    const document = SwaggerModule.createDocument(app, config, {
      include: [UserModule, NationalitiesModule, OccupationModule],
    });
    SwaggerModule.setup('api', app, document, {
      customSiteTitle: 'FIAP',
      customJs: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
      ],
      customCssUrl: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
      ],
    });
    
  await app.listen(3000);
}
bootstrap();
