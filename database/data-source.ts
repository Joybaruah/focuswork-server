import 'dotenv/config'
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ["dist/**/*.model.js"],
    migrations: ["dist/database/migrations/*.js"],
    synchronize: false,
};


const databaseSource = new DataSource(dataSourceOptions);

export default databaseSource;