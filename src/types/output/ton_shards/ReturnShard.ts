import {Expose, Type} from 'class-transformer';
import {IsString, IsInt, ValidateNested, IsArray} from 'class-validator';

class ShardsBlockIdExt {
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
}

export class ReturnShard {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsArray()
  @Type(() => ShardsBlockIdExt)
  @ValidateNested({each: true})
  shards: ShardsBlockIdExt[];

  @Expose()
  @IsString()
  '@extra': string;
}
