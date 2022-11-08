import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as dotenv from 'dotenv'
dotenv.config()
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('NestJs-Test-Project')
  .setDescription('NestJs-Test-Project API description')
  .setVersion('1.0')
  .addTag('by SxS')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000, () =>
    console.log('App start on port ' + process.env.PORT)
  );
}
bootstrap();
