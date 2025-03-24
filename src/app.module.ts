import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/typeorm-config.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load .env variables
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService, // Use the separate TypeORM config service
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
