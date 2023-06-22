import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateKpiDto } from './dto/create-kpi.dto';
import { Kpi } from './schemas/kpi.schema';

@Injectable()
export class KpisService {
  constructor(
    @InjectModel(Kpi.name)
    private readonly kpiModel: Model<Kpi>,
  ) {}

  async create(createKpiDto: CreateKpiDto): Promise<Kpi> {
    const createdKpi = await this.kpiModel.create(createKpiDto);
    return createdKpi;
  }

  async findAll(): Promise<Kpi[]> {
    return this.kpiModel.find().exec();
  }
}
