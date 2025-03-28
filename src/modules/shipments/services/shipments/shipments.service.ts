import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shipment } from '../../entities/shipments.entity';
import { CreateShipmentDto, UpdateShipmentDto } from '../../dto/shipments.dto';
import { ShipmentStatus } from '../../enums/shipments-status.enum';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { Office } from 'src/modules/offices/entities/office.entity';

@Injectable()
export class ShipmentsService {
    constructor(
        @InjectRepository(Shipment)
        private readonly shipmentRepository: Repository<Shipment>,
    ) {}

    public async getAllShipments(): Promise<Shipment[]> {
        return await this.shipmentRepository.find({
            relations: ['sender', 'receiver', 'courier', 'fromOffice', 'toOffice'],
        });
    }

    public async getShipmentById(shipmentId: number): Promise<Shipment | null> {
        return await this.shipmentRepository.findOne({
            where: { id: shipmentId },
            relations: ['sender', 'receiver', 'courier', 'fromOffice', 'toOffice'],
        });
    }

    public async createShipment(dto: CreateShipmentDto): Promise<Shipment> {
        const shipment = new Shipment();

        // Свързваме по ID, за да се запишат външните ключове
        shipment.sender = { id: dto.senderId } as UserEntity;
        shipment.receiver = { id: dto.receiverId } as UserEntity;
        shipment.courier = { id: dto.courierId } as UserEntity;

        shipment.fromOffice = { id: dto.fromOfficeId } as Office;
        shipment.toOffice = { id: dto.toOfficeId } as Office;

        // Останалите директни полета
        shipment.fromAddress = dto.fromAddress;
        shipment.toAddress = dto.toAddress;
        shipment.weight = dto.weight;
        shipment.price = dto.price;
        shipment.status = dto.status ?? ShipmentStatus.REGISTERED;

        return await this.shipmentRepository.save(shipment);
    }

    public async updateShipment(shipmentId: number, dto: UpdateShipmentDto): Promise<Shipment | null> {
        await this.shipmentRepository.update(shipmentId, dto);
        return this.getShipmentById(shipmentId);
    }

    public async deleteShipment(shipmentId: number): Promise<void> {
        await this.shipmentRepository.softDelete(shipmentId);
    }
}
