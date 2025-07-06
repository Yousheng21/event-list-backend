import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from '../../entities/news.entity';
import { GetNewsDto } from './dto/news.dto';
import { from, Observable } from 'rxjs';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: typeof News,
  ) {}

  async getNewsById(id: number): Promise<News> {
    return await this.newsRepository.findOneBy({ id });
  }

  public getAllNews(take: number = 1, skip: number = 0): Observable<News[]> {
    return from(
      this.newsRepository.findAndCount({ take, skip }).then(([news]) => {
        return news;
      }),
    );
  }
}
