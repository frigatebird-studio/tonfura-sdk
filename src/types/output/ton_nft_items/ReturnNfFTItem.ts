import {
  IsString,
  IsNumberString,
  IsOptional,
  IsBoolean,
  IsObject,
  ValidateNested,
} from 'class-validator';
import {Expose, Type} from 'class-transformer';

export class NFTCollection {
  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsOptional()
  @IsString()
  owner_address?: string;

  @Expose()
  @IsNumberString()
  last_transaction_lt: string;

  @Expose()
  @IsNumberString()
  next_item_index: string;

  @Expose()
  @IsObject()
  collection_content: any;

  @Expose()
  @IsString()
  code_hash: string;

  @Expose()
  @IsString()
  data_hash: string;
}

export class ReturnNFTItem {
  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsOptional()
  @IsString()
  collection_address?: string;

  @Expose()
  @IsOptional()
  @IsString()
  owner_address?: string;

  @Expose()
  @IsBoolean()
  init: boolean;

  @Expose()
  @IsNumberString()
  index: string;

  @Expose()
  @IsNumberString()
  last_transaction_lt: string;

  @Expose()
  @IsString()
  code_hash: string;

  @Expose()
  @IsString()
  data_hash: string;

  @Expose()
  @IsObject()
  content: any;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => NFTCollection)
  collection?: NFTCollection;
}
