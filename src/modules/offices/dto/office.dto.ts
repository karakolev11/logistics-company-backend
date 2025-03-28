import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateOfficeDto {
    
    @IsNotEmpty()
    public officeName: string;

    @IsNotEmpty()
    public officeAddress: string;

    @IsNotEmpty()
    public officeNumber: string;
}

export class UpdateOfficeDto { 

    @IsNotEmpty()
    public id: number;

    @IsOptional()
    public officeName?: string;

    @IsOptional()
    public officeAddress?: string;

    @IsOptional()
    public officeNumber?: string;
}
