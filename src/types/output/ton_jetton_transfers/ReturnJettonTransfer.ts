import {
  IsString,
  IsNumberString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import {Expose} from 'class-transformer';


export class ReturnJettonTransfer {
  @Expose()
  @IsNumberString()
  query_id: string;

  @Expose()
  @IsString()
  source: string;

  @Expose()
  @IsString()
  destination: string;

  @Expose()
  @IsNumberString()
  amount: string;

  @Expose()
  @IsString()
  source_wallet: string;

  @Expose()
  @IsString()
  jetton_master: string;

  @Expose()
  @IsString()
  transaction_hash: string;

  @Expose()
  @IsNumberString()
  transaction_lt: string;

  @Expose()
  @IsNumber()
  transaction_now: number;

  @Expose()
  @IsOptional()
  @IsString()
  response_destination?: string;

  @Expose()
  @IsOptional()
  @IsString()
  custom_payload?: string;

  @Expose()
  @IsOptional()
  @IsNumberString()
  forward_ton_amount?: string;

  @Expose()
  @IsOptional()
  @IsString()
  forward_payload?: string;
}
