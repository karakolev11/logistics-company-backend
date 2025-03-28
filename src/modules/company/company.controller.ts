import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompanyService } from './services/company/company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';

@Controller('company')
export class CompanyController {

    constructor(private readonly companyService: CompanyService) {}

    @Get()
    public async getAllCompanies(): Promise<Company[]> {
        return this.companyService.getAllCompanies();
    }

    @Get(':companyId')
    public async getCompanyByid(@Param('companyId') companyId:number): Promise<Company | null> {
        return this.companyService.getCompanyById(companyId)
    }

    @Get(':companyName')
    public async getCompanyByName(@Param('companyName') companyName:string): Promise<Company | null>{
        return this.companyService.getCompanyByName(companyName) 
    }

    @Post('create-company')
    public async createCompany(@Body() dto: CreateCompanyDto): Promise<Company>{
        return this.companyService.createCompany(dto);
    }

    @Put(':companyId')
    public async updateCompany(@Body() dto: UpdateCompanyDto, @Param('companyId') companyId:number): Promise<Company | null> {
        return this.companyService.updateCompany(companyId, dto);
    }

    @Delete(':companyId')
    public async deleteCompany(@Param('companyId') companyId:number): Promise<void> {
        return this.companyService.deleteCompany(companyId)
    }
}
