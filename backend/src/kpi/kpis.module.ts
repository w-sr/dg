import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KpisController } from './kpis.controller';
import { KpisService } from './kpis.service';
import { Kpi, KpiSchema } from './schemas/kpi.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Kpi.name, schema: KpiSchema }])],
  controllers: [KpisController],
  providers: [KpisService],
})
export class KpisModule {}
