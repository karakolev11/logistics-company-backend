import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/typeorm-config.service';
import { CommonModule } from './modules/common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/company/company.module';
import { UsersModule } from './modules/users/users.module';
import { ShipmentsModule } from './modules/shipments/shipments.module';
import { OfficesModule } from './modules/offices/offices.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), // Load .env variables
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService, // Use the separate TypeORM config service
    }), 
    CommonModule, 
    AuthModule, 
    CompanyModule, 
    UsersModule, 
    ShipmentsModule, 
    OfficesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
