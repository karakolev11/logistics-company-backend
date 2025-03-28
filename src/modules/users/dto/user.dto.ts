import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsNumber,
    ValidateIf
  } from 'class-validator';
  import { UserRole } from '../enum/user-role.enum';
  
  export class CreateUserDto {
    @IsNotEmpty()
    public username: string;
  
    @IsEmail()
    public email: string;
  
    @IsNotEmpty()
    public password: string;
  
    @IsOptional()
    public firstName?: string;
  
    @IsOptional()
    public lastName?: string;
  
    @IsOptional()
    public phoneNumber?: string;
  
    @IsEnum(UserRole)
    public role: UserRole;
  
    @ValidateIf((dto: CreateUserDto) => dto.role !== UserRole.CLIENT)
    @IsNumber()
    public officeId?: number;
  }
  
  export class UpdateUserDto {
    @IsOptional()
    public username?: string;
  
    @IsOptional()
    @IsEmail()
    public email?: string;
  
    @IsOptional()
    public password?: string;
  
    @IsOptional()
    public firstName?: string;
  
    @IsOptional()
    public lastName?: string;
  
    @IsOptional()
    public phoneNumber?: string;
  
    @IsOptional()
    @IsEnum(UserRole)
    public role?: UserRole;
  
    @ValidateIf((dto: UpdateUserDto) => dto.role !== UserRole.CLIENT)
    @IsNumber()
    @IsOptional()
    public officeId?: number;
  }
  