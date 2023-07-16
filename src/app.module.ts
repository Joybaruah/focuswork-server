import 'dotenv/config'
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


// DATABASE
const DATABASE = TypeOrmModule.forRoot({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [],
  synchronize: false
})

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
