import {Expose} from 'class-transformer';
import {
  IsInt,
  IsBoolean,
  IsString,
  IsNumber,
  ValidateNested,
  IsArray,
} from 'class-validator';

class BlockIdExt {
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

class PrevBlock {
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

export class ReturnGetBlockheader {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @ValidateNested()
  id: BlockIdExt;

  @Expose()
  @IsInt()
  global_id: number;

  @Expose()
  @IsInt()
  version: number;

  @Expose()
  @IsInt()
  flags: number;

  @Expose()
  @IsBoolean()
  after_merge: boolean;

  @Expose()
  @IsBoolean()
  after_split: boolean;

  @Expose()
  @IsBoolean()
  before_split: boolean;

  @Expose()
  @IsBoolean()
  want_merge: boolean;

  @Expose()
  @IsBoolean()
  want_split: boolean;

  @Expose()
  @IsInt()
  validator_list_hash_short: number;

  @Expose()
  @IsInt()
  catchain_seqno: number;

  @Expose()
  @IsInt()
  min_ref_mc_seqno: number;

  @Expose()
  @IsBoolean()
  is_key_block: boolean;

  @Expose()
  @IsInt()
  prev_key_block_seqno: number;

  @Expose()
  @IsString()
  start_lt: string;

  @Expose()
  @IsString()
  end_lt: string;

  @Expose()
  @IsNumber()
  gen_utime: number;

  @Expose()
  @IsNumber()
  vert_seqno: number;

  @Expose()
  @IsArray()
  @ValidateNested({each: true})
  prev_blocks: PrevBlock[];

  @Expose()
  @IsString()
  '@extra': string;
}
