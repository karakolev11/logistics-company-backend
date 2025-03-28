import { IsNotEmpty, IsOptional, IsNumber, IsEnum } from "class-validator";
import { ShipmentStatus } from "../enums/shipments-status.enum";

export class CreateShipmentDto {
    @IsNotEmpty()
    public senderId: number;

    @IsNotEmpty()
    public receiverId: number;

    @IsOptional()
    public courierId?: number;

    @IsOptional()
    public fromOfficeId?: number;

    @IsOptional()
    public toOfficeId?: number;

    @IsOptional()
    public fromAddress?: string;

    @IsOptional()
    public toAddress?: string;

    @IsNotEmpty()
    @IsNumber()
    public weight: number;

    @IsNotEmpty()
    @IsNumber()
    public price: number;

    @IsOptional()
    @IsEnum(ShipmentStatus)
    public status?: ShipmentStatus;
}

export class UpdateShipmentDto {
    @IsNotEmpty()
    public id: number;

    @IsOptional()
    public courierId?: number;

    @IsOptional()
    public fromOfficeId?: number;

    @IsOptional()
    public toOfficeId?: number;

    @IsOptional()
    public fromAddress?: string;

    @IsOptional()
    public toAddress?: string;

    @IsOptional()
    @IsNumber()
    public weight?: number;

    @IsOptional()
    @IsNumber()
    public price?: number;

    @IsOptional()
    @IsEnum(ShipmentStatus)
    public status?: ShipmentStatus;
}
