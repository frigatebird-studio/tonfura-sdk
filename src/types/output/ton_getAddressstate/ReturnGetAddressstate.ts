import {IsString} from 'class-validator';
import {Expose} from 'class-transformer';

export class ReturnGetAddressstate {
  @Expose()
  @IsString()
  public result: string;
}
