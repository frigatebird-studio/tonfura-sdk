import {
  IsBoolean,
  IsString,
  IsInt,
  ValidateNested,
  ValidateIf,
  Validate,
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
  @ValidateIf(v => v.wallet_type !== undefined)
  wallet_type: string;

  @Expose()
  @ValidateIf(v => v.seqno !== undefined)
  @IsInt()
  seqno: number;

  @Expose()
  @ValidateNested()
  @Type(() => LastTransactionId)
  last_transaction_id: LastTransactionId;

  @Expose()
  @IsInt()
  @ValidateIf(v => v.wallet_id !== undefined)
  wallet_id: number;
}
