import { Body, Controller, Get, Post } from '@nestjs/common';
import { KpisService } from './kpis.service';
import { CreateKpiDto } from './dto/create-kpi.dto';
import { Kpi } from './schemas/kpi.schema';

@Controller('kpis')
export class KpisController {
  constructor(private readonly kpisService: KpisService) {}

  @Post()
  async create(@Body() createKpiDto: CreateKpiDto) {
    await this.kpisService.create(createKpiDto);
  }

  @Get()
  async findAll(): Promise<Kpi[]> {
    return this.kpisService.findAll();
  }
}
