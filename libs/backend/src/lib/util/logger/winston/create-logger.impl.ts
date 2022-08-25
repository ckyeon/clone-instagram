import { LoggerService } from '@nestjs/common';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { CreateLogger as CreateCustomLogger } from '../create-logger';

export const createLoggerImpl: CreateCustomLogger = (appName: string): LoggerService => {
  return WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        level: process.env['NODE' + '_ENV'] === 'production' ? 'info' : 'debug',
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike(appName, {
            prettyPrint: true,
            colors: true,
          }),
        ),
      }),
    ],
  });
};
