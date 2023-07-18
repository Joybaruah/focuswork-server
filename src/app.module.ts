import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'database/data-source';

// DATABASE
const DATABASE = TypeOrmModule.forRoot(dataSourceOptions)

// APP
const APPS = [
  UsersModule,
]

@Module({
  imports: [...APPS, DATABASE],
  controllers: [],
  providers: [],
})
export class AppModule {}
