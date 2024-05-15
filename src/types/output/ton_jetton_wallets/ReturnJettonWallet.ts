import {
  IsString,
  IsNumberString,
} from 'class-validator';
import {Expose} from 'class-transformer';


export class ReturnJettonWallet {
  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsNumberString()
  balance: string;

  @Expose()
  @IsString()
  owner: string;

  @Expose()
  @IsString()
  jetton: string;

  @Expose()
  @IsNumberString()
  last_transaction_lt: string;

  @Expose()
  @IsString()
  code_hash: string;

  @Expose()
  @IsString()
  data_hash: string;
}
