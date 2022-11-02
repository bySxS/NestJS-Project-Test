import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv'
dotenv.config()
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('App start on port ' + process.env.PORT);
}
bootstrap();
