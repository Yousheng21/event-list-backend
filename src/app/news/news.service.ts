import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from '../../entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly NewsRepository: Repository<News>,
  ) {}

  async createNews(title: string): Promise<News> {
    const News = this.NewsRepository.create({ title });
    return this.NewsRepository.save(News);
  }

  async getAllNews(): Promise<News[]> {
    return await this.NewsRepository.find();
  }
}
