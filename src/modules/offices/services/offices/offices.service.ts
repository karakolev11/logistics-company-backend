import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from '../../entities/office.entity';
import { CreateOfficeDto, UpdateOfficeDto } from '../../dto/office.dto';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class OfficesService {
    constructor(
        @InjectRepository(Office) private readonly officeRepository: Repository<Office>
    ) {}
    
    public async getAllOffices(): Promise<Office[]> {
        return await this.officeRepository.find();
    }

    public async getOfficeById(officeId: number): Promise<Office | null> {
        return await this.officeRepository.findOneBy({ id: officeId });
    }
    
    public async getOfficeByName(officeName: string): Promise<Office | null> {
        return await this.officeRepository.findOneBy({ officeName: officeName });
    }

    public async createOffice(dto: CreateOfficeDto): Promise<Office> {
        const office = plainToInstance(Office, instanceToPlain(dto));
        return await this.officeRepository.save(office);
    }

    public async updateOffice(officeId: number, updateDto: UpdateOfficeDto): Promise<Office | null> {
        await this.officeRepository.update(officeId, updateDto);
        return this.getOfficeById(officeId);
    }

    public async deleteOffice(officeId: number): Promise<void> {
        await this.officeRepository.softDelete(officeId);
    }
}
