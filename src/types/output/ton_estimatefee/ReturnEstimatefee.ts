import {Expose, Type} from 'class-transformer';
import {IsArray, IsInt, IsString, ValidateNested} from 'class-validator';

class SourceFees {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsInt()
  in_fwd_fee: number;

  @Expose()
  @IsInt()
  storage_fee: number;

  @Expose()
  @IsInt()
  gas_fee: number;

  @Expose()
  @IsInt()
  fwd_fee: number;
}

export class ReturnEstimatefee {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @Type(() => SourceFees)
  @ValidateNested()
  source_fees: SourceFees;

  @Expose()
  @IsArray()
  @Type(() => SourceFees)
  @ValidateNested()
  destination_fees: SourceFees[];

  @Expose()
  @IsString()
  '@extra': string;
}
