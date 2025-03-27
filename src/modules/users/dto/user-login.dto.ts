import { IsNotEmpty } from "class-validator";

export class UserLoginDto { 
   
    @IsNotEmpty()
    public username: string;
       
    @IsNotEmpty()
    public password: string;
    
}