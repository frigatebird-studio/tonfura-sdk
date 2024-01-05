import {IsString} from 'class-validator';
import {Expose} from 'class-transformer';

export class ReturnGetAddressbalance {
  @Expose()
  @IsString()
  public result: string;
}
