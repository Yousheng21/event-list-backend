import { DataSource } from 'typeorm';
import '../config/loadEnv';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/src/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: true,
  migrationsTableName: 'migrations',
});
