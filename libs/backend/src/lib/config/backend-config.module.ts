import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { validationSchema } from './validation-schema';

const configFilePath = join(__dirname, '../../../config');
const envFilePath = [
  join(configFilePath, `.${process.env['NODE' + 'ENV'] || `development`}.env`),
];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      validationSchema,
    }),
  ],
})
export class BackendConfigModule {
}
