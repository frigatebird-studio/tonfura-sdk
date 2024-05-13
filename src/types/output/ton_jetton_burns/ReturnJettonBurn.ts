import {
  IsString,
  IsNumberString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import {Expose} from 'class-transformer';


export class ReturnJettonBurn {
  @Expose()
  @IsNumberString()
  query_id: string;

  @Expose()
  @IsString()
  owner: string;

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
}
