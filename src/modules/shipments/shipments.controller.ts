import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ShipmentsService } from './services/shipments/shipments.service';
import { Shipment } from './entities/shipments.entity';
import { CreateShipmentDto, UpdateShipmentDto } from './dto/shipments.dto';


@Controller('shipment')
export class ShipmentsController {
    constructor(private readonly shipmentsService: ShipmentsService) {}

    @Get()
    public async getAllShipments(): Promise<Shipment[]> {
        return this.shipmentsService.getAllShipments();
    }

    @Get(':shipmentId')
    public async getShipmentById(@Param('shipmentId') shipmentId: number): Promise<Shipment | null> {
        return this.shipmentsService.getShipmentById(shipmentId);
    }

    @Post('create-shipment')
    public async createShipment(@Body() dto: CreateShipmentDto): Promise<Shipment> {
        return this.shipmentsService.createShipment(dto);
    }

    @Put(':shipmentId')
    public async updateShipment(
        @Param('shipmentId') shipmentId: number,
        @Body() dto: UpdateShipmentDto,
    ): Promise<Shipment | null> {
        return this.shipmentsService.updateShipment(shipmentId, dto);
    }

    @Delete(':shipmentId')
    public async deleteShipment(@Param('shipmentId') shipmentId: number): Promise<void> {
        return this.shipmentsService.deleteShipment(shipmentId);
    }
}
