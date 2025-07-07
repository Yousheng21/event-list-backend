import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Like } from 'typeorm';
import { News } from '../../entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: typeof News,
  ) {}

  async getNewsById(id: number): Promise<News> {
    return await this.newsRepository.findOneBy({ id });
  }

  async getAllNews(
    take: number = 1,
    skip: number = 0,
    search = '',
  ): Promise<{ page: News[]; total: number }> {
    const searchFormattedText = search.trim().toLowerCase().split(' ');
    const where: FindOptionsWhere<News>[] = [];

    for (const word of searchFormattedText) {
      where.push({ title: Like(`%${word}%`) });
      where.push({ city: Like(`%${word}%`) });
      where.push({ description: Like(`%${word}%`) });
      where.push({ company: Like(`%${word}%`) });
    }

    const total = (await this.newsRepository.find({ where })).length;

    const page = await this.newsRepository
      .findAndCount({
        take: take || 10,
        skip: skip || 0,
        where,
      })
      .then(([news]) => {
        return news;
      });

    return {
      page,
      total,
    };
  }
}
