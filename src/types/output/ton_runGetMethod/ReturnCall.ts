import {Expose} from 'class-transformer';
import {IsInt, IsString} from 'class-validator';

export class ReturnCall {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsInt()
  gas_used: number;

  @Expose()
  stack: any;

  @Expose()
  @IsInt()
  exit_code: number;

  @Expose()
  @IsString()
  '@extra': string;
}
