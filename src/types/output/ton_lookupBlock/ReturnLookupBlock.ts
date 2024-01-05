import {Expose} from 'class-transformer';
import {IsInt, IsString} from 'class-validator';

export class ReturnLookupBlock {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsInt()
  workchain: number;

  @Expose()
  @IsString()
  shard: string;

  @Expose()
  @IsInt()
  seqno: number;

  @Expose()
  @IsString()
  root_hash: string;

  @Expose()
  @IsString()
  file_hash: string;

  @Expose()
  @IsString()
  '@extra': string;
}
