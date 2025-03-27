import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { UserRole } from "../enum/user-role.enum";

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

}

export class UpdateUserDto { 

    @IsNotEmpty()
    public id: number;

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
}

