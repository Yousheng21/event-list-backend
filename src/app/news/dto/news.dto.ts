import { IsNumber } from 'class-validator';

export class GetNewsDto {
  @IsNumber()
  current: string;
  @IsNumber()
  next: string;
}
