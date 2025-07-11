import { DataSource } from 'typeorm';
import '../config/loadEnv';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'event_list',
  entities: ['src/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  logging: true,
  synchronize: true,
  migrationsTableName: 'migrations',
});
