import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard)
    public async getAllUsers(): Promise<UserEntity[]> {
        return this.userService.getAllUsers();
    }
    
    @Get(':userId')
    @UseGuards(AuthGuard)
    public async getUserById(@Param('userId') userId: number): Promise<UserEntity | null> {
        return this.userService.getUserById(userId);
    }
    
    @Post('register')
    public async register(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUserDto);
    }
    
    @Put(':userId')
    @UseGuards(AuthGuard)
    public async updateUser(@Param('userId') id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserEntity | null> {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':userId')
    @UseGuards(AuthGuard)
    public async remove(@Param('userId') id: number): Promise<UpdateResult> {
        return this.userService.deleteUser(id);
    }
}
