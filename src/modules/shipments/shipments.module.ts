import { Module } from '@nestjs/common';
import { ShipmentsService } from './services/shipments/shipments.service';
import { ShipmentsController } from './shipments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entities/shipments.entity';

@Module({
  providers: [ShipmentsService],
  controllers: [ShipmentsController],
  imports: [
    TypeOrmModule.forFeature([
    Shipment
  ])
  ]
})
export class ShipmentsModule {}
