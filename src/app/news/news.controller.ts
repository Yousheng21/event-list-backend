import { Controller, Get, ParseIntPipe, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from 'src/entities/news.entity';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  public getAllNews(
    @Query('take') take: number = 1,
    @Query('skip') skip: number = 0,
    @Query('search') search: string = '',
  ) {
    return this.newsService.getAllNews(take, skip, search);
  }

  @Get(':id')
  public async getNewsById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<News> {
    return await this.newsService.getNewsById(id);
  }
}
