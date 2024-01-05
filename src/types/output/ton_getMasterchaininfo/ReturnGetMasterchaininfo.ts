import {Expose, Type} from 'class-transformer';
import {IsInt, IsString, ValidateNested} from 'class-validator';

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

export class ReturnGetMasterchaininfo {
  @Expose()
  @IsString()
  '@type': string;

  @ValidateNested()
  @Type(() => TonBlockIdExt)
  last: TonBlockIdExt;

  @Expose()
  @IsString()
  state_root_hash: string;

  @Expose()
  @ValidateNested()
  @Type(() => TonBlockIdExt)
  init: TonBlockIdExt;
}
