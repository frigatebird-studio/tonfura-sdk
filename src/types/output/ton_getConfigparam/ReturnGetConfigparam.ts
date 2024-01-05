import {Expose, Type} from 'class-transformer';
import {IsObject, ValidateNested, IsString} from 'class-validator';

class Config {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  bytes: string;
}

export class ReturnGetConfigparam {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsObject()
  @ValidateNested()
  @Type(() => Config)
  config: Config;

  @Expose()
  @IsString()
  '@extra': string;
}
