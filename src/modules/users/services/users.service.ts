import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { Office } from 'src/modules/offices/entities/office.entity';
import { UserRole } from '../enum/user-role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find({
      relations: ['office'],
    });
  }

  public async getUserById(userId: number): Promise<UserEntity | null> {
    return await this.userRepository.findOne({
      where: { id: userId },
      relations: ['office'],
    });
  }

  public async getUserByUsername(username: string): Promise<UserEntity | null> {
    return await this.userRepository.findOneBy({ username });
  }

  public async createUser(dto: CreateUserDto): Promise<UserEntity> {
    const user = plainToInstance(UserEntity, instanceToPlain(dto));

    if (dto.role !== UserRole.CLIENT && dto.officeId) {
      user.office = { id: dto.officeId } as Office;
    }

    return await this.userRepository.save(user);
  }

  public async updateUser(userId: number, dto: UpdateUserDto): Promise<UserEntity | null> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) return null;

    Object.assign(user, dto);

    if (dto.role && dto.role !== UserRole.CLIENT && dto.officeId) {
      user.office = { id: dto.officeId } as Office;
    }

    if ((dto.role === UserRole.CLIENT || dto.officeId === null) && user.office) {
      user.office = undefined;
    }

    await this.userRepository.save(user);
    return this.getUserById(userId);
  }

  public async deleteUser(userId: number): Promise<UpdateResult> {
    return await this.userRepository.softDelete(userId);
  }
}
