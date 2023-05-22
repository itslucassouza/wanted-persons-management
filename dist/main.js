"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const user_module_1 = require("./user/user.module");
const nationalities_module_1 = require("./nacionalities/nationalities.module");
const occupation_module_1 = require("./occupations/occupation.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Fiap')
        .setDescription('Procurados pelo FBI e Interpol')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [user_module_1.UserModule, nationalities_module_1.NationalitiesModule, occupation_module_1.OccupationModule],
    });
    swagger_1.SwaggerModule.setup('api', app, document, {
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
//# sourceMappingURL=main.js.map