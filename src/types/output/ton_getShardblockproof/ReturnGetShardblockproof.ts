import {Expose, Type} from 'class-transformer';
import {
  IsInt,
  IsString,
  IsArray,
  ValidateNested,
  IsBoolean,
} from 'class-validator';

class TonBlockIdExt {
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

class BlockLinkBack {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @ValidateNested()
  from: TonBlockIdExt;

  @Expose()
  @ValidateNested()
  to: TonBlockIdExt;

  @Expose()
  @IsBoolean()
  to_key_block: boolean;

  @Expose()
  @IsString()
  dest_proof: string;

  @Expose()
  @IsString()
  proof: string;

  @Expose()
  @IsString()
  state_proof: string;
}

export class ReturnGetShardblockproof {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @ValidateNested()
  @Type(() => TonBlockIdExt)
  from: TonBlockIdExt;

  @Expose()
  @ValidateNested()
  @Type(() => TonBlockIdExt)
  mc_id: TonBlockIdExt;

  @Expose()
  @IsArray()
  links: any;

  @Expose()
  @ValidateNested()
  @Type(() => BlockLinkBack)
  mc_proof: BlockLinkBack[];
  
  @Expose()
  @IsString()
  '@extra': string;
}
