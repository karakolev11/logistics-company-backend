import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
        // @InjectRepository(name of the class) private readonly <name of the variable>: Repository<name of the class>
    ) {}

    public async getAllUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    public async getUserById(userId: number): Promise<UserEntity | null> {
        return await this.userRepository.findOneBy({ id: userId });
    }
    
    public async getUserByUsername(username: string): Promise<UserEntity | null> {
        return await this.userRepository.findOneBy({ username: username });
    }

    public async createUser(dto: CreateUserDto): Promise<UserEntity> {
        const user = plainToInstance(UserEntity, instanceToPlain(dto));
        return await this.userRepository.save(user);
    }

    public async updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<UserEntity | null> {
        await this.userRepository.update(userId, updateUserDto);
        return this.getUserById(userId); 
    }

    public async deleteUser(userId: number): Promise<UpdateResult> {
        return await this.userRepository.softDelete(userId);
    }
}
