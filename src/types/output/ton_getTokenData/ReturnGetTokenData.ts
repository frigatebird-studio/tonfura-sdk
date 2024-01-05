import {Expose, Type} from 'class-transformer';
import {IsString, IsNumber, IsBoolean, ValidateNested} from 'class-validator';

class Data {
  @Expose()
  @IsString()
  image: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  symbol: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsString()
  decimals: string;
}

class JettonContent {
  @Expose()
  @IsString()
  type: string;

  @Expose()
  @ValidateNested()
  @Type(() => Data)
  data: Data;
}

export class ReturnGetTokenData {
  @Expose()
  @IsNumber()
  total_supply: number;

  @Expose()
  @IsBoolean()
  mintable: boolean;

  @Expose()
  @IsString()
  admin_address: string;

  @ValidateNested()
  @Type(() => JettonContent)
  jetton_content: JettonContent;

  @Expose()
  @IsString()
  jetton_wallet_code: string;

  @Expose()
  @IsString()
  contract_type: string;
}
