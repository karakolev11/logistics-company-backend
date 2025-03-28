import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCompanyDto {
    
    @IsNotEmpty()
    public companyName: string;

    @IsNotEmpty()
    public companyAddress: string;

    @IsNotEmpty()
    public bulstat: string;
}

export class UpdateCompanyDto { 

    @IsNotEmpty()
    public id: number;

    @IsOptional()
    public companyAddress?: string;

    @IsOptional()
    public bulstat?: string;
}