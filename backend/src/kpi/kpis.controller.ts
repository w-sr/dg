import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { KpiDto } from './dto/kpi.dto';
import { KpisService } from './kpis.service';

@Controller('kpis')
export class KpisController {
  constructor(private readonly kpisService: KpisService) {}

  @Get()
  async findAll(@Res() response) {
    try {
      const kpis = await this.kpisService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'All kpis data found successfully',
        kpis,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post()
  async createKpi(@Res() response, @Body() createKpiDto: KpiDto) {
    try {
      const newKpi = await this.kpisService.create(createKpiDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Kpi has been created successfully',
        kpi: newKpi,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Kpi not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateKpi(
    @Res() response,
    @Param('id') id: string,
    @Body() updateKpiDto: KpiDto,
  ) {
    try {
      const existingKpi = await this.kpisService.update(updateKpiDto, id);
      return response.status(HttpStatus.OK).json({
        message: 'Kpi has been successfully updated',
        kpi: existingKpi,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getKpi(@Res() response, @Param('id') id: string) {
    try {
      const existingKpi = await this.kpisService.get(id);
      return response.status(HttpStatus.OK).json({
        message: 'Kpi found successfully',
        kpi: existingKpi,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteKpi(@Res() response, @Param('id') id: string) {
    try {
      const deletedKpi = await this.kpisService.delete(id);
      return response.status(HttpStatus.OK).json({
        message: 'Kpi deleted successfully',
        kpi: deletedKpi,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
