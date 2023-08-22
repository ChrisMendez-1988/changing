import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './new-logger/logger.facade';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, { logger: new MyLogger() });
  await app.listen(3000);
  logger.log(`this microservice is listening on port ${await app.getUrl()}`);
}
bootstrap();
