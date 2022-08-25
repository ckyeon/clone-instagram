/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { createLoggerImpl, setupSwagger } from '@clone-instagram/backend';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: createLoggerImpl('InstaApi') });

  if (process.env['NODE' + '_ENV'] !== 'production') {
    setupSwagger(app, {
      title: 'Instagram Api',
      description: 'APIs of Instagram Application',
      version: '1.0',
      tag: 'Instagram App APIs',
      docPath: 'api-doc',
    });
  }

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`,
  );
}

bootstrap();
