import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
  Query,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { GetNewsDto } from './dto/news.dto';
import { News } from 'src/entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  public getAllNews(
    @Query('take') take: number = 1,
    @Query('skip') skip: number = 0,
  ) {
    return this.newsService.getAllNews(take, skip);
  }

  @Get(':id')
  public async getNewsById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<News> {
    return await this.newsService.getNewsById(id);
  }
}
