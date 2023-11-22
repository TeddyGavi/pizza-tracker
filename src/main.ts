import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle("pizza-tracker-api")
    .setDescription("RESTful api for tracking users, and pizza consumptions")
    .setVersion("1.0")
    .addTag("Pizza")
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup("api-docs", app, document);
  await app.listen(8080);
}
bootstrap();
