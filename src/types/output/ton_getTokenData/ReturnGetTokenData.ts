import {Expose, Type} from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsBoolean,
  ValidateNested,
  IsOptional,
} from 'class-validator';

class Data {
  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  symbol: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  decimals: string;

  @IsOptional()
  @IsString()
  data?: string;
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

  @Expose()
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
