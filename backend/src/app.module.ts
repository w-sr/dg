import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KpisModule } from './kpi/kpis.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://worldsr:croco@dg.qb9riq9.mongodb.net',
    ),
    KpisModule,
  ],
})
export class AppModule {}
