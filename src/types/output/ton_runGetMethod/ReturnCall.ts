import {Expose, Type} from 'class-transformer';
import {IsArray, IsInt, IsString, ValidateIf} from 'class-validator';

export class ReturnCall {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsInt()
  gas_used: number;

  @IsArray()
  @Type(() => Array)
  @ValidateIf(o => o.stack.length > 0)
  stack: string[][];

  @Expose()
  @IsInt()
  exit_code: number;

  @Expose()
  @IsString()
  '@extra': string;
}
