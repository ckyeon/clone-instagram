import { Global, Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';

@Global()
@Module({
  imports: [
    MongoModule,
  ],
})
export class BackendDatabaseModule {
}
