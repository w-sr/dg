import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KpisModule } from './kpi/kpis.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/dg'), KpisModule],
})
export class AppModule {}
