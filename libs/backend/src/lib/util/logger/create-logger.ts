import { LoggerService } from '@nestjs/common';

export interface CreateLogger {
  (appName: string): LoggerService;
}
