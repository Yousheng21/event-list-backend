import './config/loadEnv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dataSource from 'src/db/dataSrc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
  // await dataSource.initialize();
}

void bootstrap();
