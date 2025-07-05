import { Controller, Get, Post, Body } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('Newss')
export class NewsController {
  constructor(private readonly NewsService: NewsService) {}

  @Post()
  createNews(@Body() { title }: { title: string }) {
    return this.NewsService.createNews(title);
  }

  @Get()
  getAllNews() {
    return this.NewsService.getAllNews();
  }
}
