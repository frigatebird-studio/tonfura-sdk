import {Expose, Type} from 'class-transformer';
import {
  IsObject,
  ValidateNested,
  IsString,
  IsBoolean,
  IsNumber,
} from 'class-validator';

class ID {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsNumber()
  workchain: number;

  @Expose()
  @IsString()
  shard: string;

  @Expose()
  @IsNumber()
  seqno: number;

  @Expose()
  @IsString()
  root_hash: string;

  @Expose()
  @IsString()
  file_hash: string;
}

class Transactions {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsNumber()
  mode: number;

  @Expose()
  @IsString()
  account: string;

  @Expose()
  @IsString()
  lt: string;

  @Expose()
  @IsString()
  hash: string;
}

export class ReturnGetBlockTransactions {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsObject()
  @ValidateNested()
  @Type(() => ID)
  id: ID;

  @Expose()
  @IsNumber()
  req_count: number;

  @Expose()
  @IsBoolean()
  incomplete: boolean;

  transactions: Transactions[];
  @Expose()
  @IsString()
  '@extra': string;
}
