import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { KpisModule } from './kpi/kpis.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URL'),
      }),
    }),
    KpisModule,
  ],
})
export class AppModule {}
