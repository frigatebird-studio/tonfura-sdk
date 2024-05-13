import {
  IsBoolean,
  IsString,
  IsInt,
  ValidateNested,
  Validate,
  IsOptional,
} from 'class-validator';
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

export class ReturnGetWalletinformation {
  @Expose()
  @IsBoolean()
  wallet: boolean;

  // will show number if address not active
  @Expose()
  @Validate(IsNumberOrString)
  balance: string | number;

  @Expose()
  @IsString()
  account_state: string;

  @Expose()
  @IsString()
  @IsOptional()
  wallet_type?: string;

  @Expose()
  @IsOptional()
  @IsInt()
  seqno?: number;

  @Expose()
  @ValidateNested()
  @Type(() => LastTransactionId)
  last_transaction_id: LastTransactionId;

  @Expose()
  @IsInt()
  @IsOptional()
  wallet_id?: number;
}
