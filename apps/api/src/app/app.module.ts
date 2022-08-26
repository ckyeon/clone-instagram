import {
  BackendConfigModule,
  BackendDatabaseModule,
} from '@clone-instagram/backend';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BackendConfigModule,
    BackendDatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
