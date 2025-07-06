import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'src/entities/news.entity';
import { NewsService } from './news.service';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
