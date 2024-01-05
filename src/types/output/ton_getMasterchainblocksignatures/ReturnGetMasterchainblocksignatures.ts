import {Expose, Type} from 'class-transformer';
import {IsString, ValidateNested, IsInt} from 'class-validator';

class Signature {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  node_id_short: string;

  @Expose()
  @IsString()
  signature: string;
}
class TonBlockIdExt {
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

export class ReturnGetMasterchainblocksignatures {
  @IsString()
  '@type': string;

  @Expose()
  @ValidateNested()
  @Type(() => TonBlockIdExt)
  id: TonBlockIdExt;

  @Expose()
  @ValidateNested()
  @Type(() => Signature)
  signatures: Signature[];
}
