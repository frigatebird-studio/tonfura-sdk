import {Expose, Type} from 'class-transformer';
import {IsString, ValidateNested, IsInt, ValidateIf} from 'class-validator';

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

class RawMessage {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  source: string;

  @Expose()
  @IsString()
  destination: string;

  @Expose()
  @IsString()
  value: string;

  @Expose()
  @IsString()
  fwd_fee: string;

  @Expose()
  @IsString()
  ihr_fee: string;

  @Expose()
  @IsString()
  created_lt: string;

  @Expose()
  @IsString()
  body_hash: string;

  @Expose()
  @IsString()
  message: string;

  // @Expose()
  // @ValidateNested()
  // @Type(() => MsgDataRaw)
  msg_data: MsgDataRaw | MsgDataText;
}

class MsgDataRaw {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  body: string;

  @Expose()
  @IsString()
  init_state: string;
}

class MsgDataText {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  text: string;
}

class OutMsg {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  source: string;

  @Expose()
  @IsString()
  destination: string;

  @Expose()
  @IsString()
  value: string;

  @Expose()
  @IsString()
  fwd_fee: string;

  @Expose()
  @IsString()
  ihr_fee: string;

  @Expose()
  @IsString()
  created_lt: string;

  @Expose()
  @IsString()
  body_hash: string;

  // @Expose()
  // @ValidateNested()
  // @Type(() => MsgDataText)
  msg_data: MsgDataText | MsgDataRaw;

  @Expose()
  @IsString()
  message: string;
}

class TransactionId {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @ValidateNested()
  @Type(() => InternalTransactionId)
  transaction_id: InternalTransactionId;
}

export class ReturnTrylocatetx {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @ValidateNested()
  @Type(() => AccountAddress)
  address: string;

  @Expose()
  @IsInt()
  utime: number;

  @Expose()
  @IsString()
  data: string;

  @Expose()
  @ValidateNested()
  @Type(() => TransactionId)
  transaction_id: TransactionId;

  @Expose()
  @IsString()
  fee: string;

  @Expose()
  @IsString()
  storage_fee: string;

  @Expose()
  @IsString()
  other_fee: string;

  @Expose()
  @ValidateNested()
  @Type(() => RawMessage)
  in_msg: RawMessage;

  @Expose()
  @ValidateNested()
  @Type(() => OutMsg)
  @ValidateIf(v => v.out_msgs.length > 0)
  out_msgs: OutMsg[];
}
