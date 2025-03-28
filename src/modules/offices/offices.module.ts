import { Module } from '@nestjs/common';
import { OfficesController } from './offices.controller';
import { OfficesService } from './services/offices/offices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Office } from './entities/office.entity';

@Module({
  controllers: [OfficesController],
  providers: [OfficesService],
  imports: [
    TypeOrmModule.forFeature([
    Office
  ])
  ]
})
export class OfficesModule {}
