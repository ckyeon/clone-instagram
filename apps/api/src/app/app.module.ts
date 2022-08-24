import { BackendConfigModule } from '@clone-instagram/backend';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BackendConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
