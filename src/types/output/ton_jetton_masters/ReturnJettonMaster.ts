import {
  IsBoolean,
  IsString,
  IsNumberString,
  IsObject,
} from 'class-validator';
import {Expose} from 'class-transformer';


export class ReturnJettonMaster {
  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsNumberString()
  total_supply: string;

  @Expose()
  @IsBoolean()
  mintable: boolean;

  @Expose()
  @IsString()
  admin_address: string;

  @Expose()
  @IsNumberString()
  last_transaction_lt: string;

  @Expose()
  @IsString()
  jetton_wallet_code_hash: string;

  @Expose()
  @IsObject()
  jetton_content: any;

  @Expose()
  @IsString()
  code_hash: string;

  @Expose()
  @IsString()
  data_hash: string;

}
