import {IsString, IsInt, ValidateNested, ValidateIf} from 'class-validator';
import {Expose, Type} from 'class-transformer';

class AccountAddress {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  account_address: string;
}

class InternalTransactionId {
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

class RawAccountState {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  @ValidateIf(v => v.code !== undefined)
  code: string | undefined;

  @Expose()
  @IsString()
  @ValidateIf(v => v.data !== undefined)
  data: string;

  @Expose()
  @IsString()
  frozen_hash: string;
}

export class ReturnGetExtendedaddressinformation {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @ValidateNested()
  @Type(() => AccountAddress)
  address: AccountAddress;

  @Expose()
  @IsString()
  balance: string;

  @Expose()
  @ValidateNested()
  @Type(() => InternalTransactionId)
  last_transaction_id: InternalTransactionId;

  @Expose()
  @ValidateNested()
  @Type(() => TonBlockIdExt)
  block_id: TonBlockIdExt;

  @Expose()
  @IsInt()
  sync_utime: number;

  @Expose()
  @ValidateNested()
  @Type(() => RawAccountState)
  account_state: RawAccountState;

  @Expose()
  @IsInt()
  revision: number;

  @Expose()
  @IsString()
  '@extra': string;
}
