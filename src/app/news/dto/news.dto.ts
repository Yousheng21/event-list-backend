import { IsString } from 'class-validator';

export class CitySearchDto {
  @IsString()
  city: string;
}
