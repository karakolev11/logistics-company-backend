import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../../entities/company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto, UpdateCompanyDto } from '../../dto/company.dto';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class CompanyService {

    constructor(@InjectRepository(Company) private readonly companyRepository: Repository<Company>) {}

    public async getAllCompanies(): Promise<Company[]> {
        return await this.companyRepository.find();
    }

    public async getCompanyById(companyId: number): Promise<Company | null> {
        return await this.companyRepository.findOneBy({ id: companyId });
    }

    public async getCompanyByName(companyName: string): Promise<Company | null> {
        return await this.companyRepository.findOneBy({ companyName: companyName });
    }

    public async createCompany(dto: CreateCompanyDto): Promise<Company> {
        const company = plainToInstance(Company, instanceToPlain(dto));
        return await this.companyRepository.save(company);
    }

    public async updateCompany(companyId: number, updateCompanyDto: UpdateCompanyDto): Promise<Company | null> {
        await this.companyRepository.update(companyId, updateCompanyDto);
        return this.getCompanyById(companyId); 
    }

    public async deleteCompany(companyId: number): Promise<void> {
        await this.companyRepository.softDelete(companyId);
    }
}
