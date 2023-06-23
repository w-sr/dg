import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KpiDto } from './dto/kpi.dto';
import { Kpi } from './schemas/kpi.schema';

@Injectable()
export class KpisService {
  constructor(
    @InjectModel(Kpi.name)
    private readonly kpiModel: Model<Kpi>,
  ) {}

  async findAll(): Promise<Kpi[]> {
    const kpis = await this.kpiModel.find();
    if (!kpis || kpis.length == 0) {
      throw new NotFoundException('Data not found!');
    }
    return kpis;
  }

  async create(createKpiDto: KpiDto): Promise<Kpi> {
    try {
      const createdKpi = await this.kpiModel.create(createKpiDto);
      return createdKpi;
    } catch (error) {
      throw new HttpException('Error creating Kpi', HttpStatus.BAD_REQUEST);
    }
  }

  async update(updateKpiDto: KpiDto, id: string): Promise<Kpi> {
    const existingKpi = await this.kpiModel.findByIdAndUpdate(
      id,
      updateKpiDto,
      { new: true },
    );
    if (!existingKpi) {
      throw new NotFoundException(`Kpi #${id} not found`);
    }
    return existingKpi;
  }

  async get(id: string): Promise<Kpi> {
    const existingKpi = await this.kpiModel.findById(id).exec();
    if (!existingKpi) {
      throw new NotFoundException(`Kpi #${id} not found`);
    }
    return existingKpi;
  }

  async delete(id: string): Promise<Kpi> {
    const deletedKpi = await this.kpiModel.findByIdAndDelete(id);
    if (!deletedKpi) {
      throw new NotFoundException(`Kpi #${id} not found`);
    }
    return deletedKpi;
  }
}
