import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OfficesService } from './services/offices/offices.service';
import { Office } from './entities/office.entity';
import { CreateOfficeDto, UpdateOfficeDto } from './dto/office.dto';

@Controller('office')
export class OfficesController {

    constructor(private readonly officesService: OfficesService) {}

    @Get()
    public async getAllOffices(): Promise<Office[]> {
        return this.officesService.getAllOffices();
    }

    @Get(':officeId')
    public async getOfficeById(@Param('officeId') officeId: number): Promise<Office | null> {
        return this.officesService.getOfficeById(officeId);
    }

    @Get('name/:officeName')
    public async getOfficeByName(@Param('officeName') officeName: string): Promise<Office | null> {
        return this.officesService.getOfficeByName(officeName);
    }

    @Post('create-office')
    public async createOffice(@Body() dto: CreateOfficeDto): Promise<Office> {
        return this.officesService.createOffice(dto);
    }

    @Put(':officeId')
    public async updateOffice(
        @Param('officeId') officeId: number,
        @Body() dto: UpdateOfficeDto,
    ): Promise<Office | null> {
        return this.officesService.updateOffice(officeId, dto);
    }

    @Delete(':officeId')
    public async deleteOffice(@Param('officeId') officeId: number): Promise<void> {
        return this.officesService.deleteOffice(officeId);
    }
}
