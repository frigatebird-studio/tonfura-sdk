import {IsInt, IsString, Validate, ValidateNested} from 'class-validator';
import {Expose, Type} from 'class-transformer';
import {IsNumberOrString} from '../custom';

class LastTransactionId {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  lt: string;

  @Expose()
  @IsString()
  hash: string;
}

class BlockId {
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

export class ReturnGetAddressInfromation {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  // will show number if address not active
  @Validate(IsNumberOrString)
  balance: string | number;

  @Expose()
  @IsString()
  code: string;

  @Expose()
  @IsString()
  data: string;

  @Expose()
  @ValidateNested()
  @Type(() => LastTransactionId)
  last_transaction_id: LastTransactionId;

  @Expose()
  @ValidateNested()
  @Type(() => BlockId)
  block_id: BlockId;

  @Expose()
  @IsString()
  frozen_hash: string;

  @Expose()
  @IsInt()
  sync_utime: number;

  @Expose()
  @IsString()
  '@extra': string;

  @Expose()
  @IsString()
  state: string;
}
