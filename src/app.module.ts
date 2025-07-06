import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './app/news/news.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      entities: [__dirname + '/src/*.entity{.ts,.js}'],
      migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
      logging: true,
      synchronize: true,
      migrationsTableName: 'migrations',
    }),
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
