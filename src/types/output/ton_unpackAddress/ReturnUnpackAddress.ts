import {IsString} from 'class-validator';
import {Expose} from 'class-transformer';

export class ReturnUnpackAddress {
  @Expose()
  @IsString()
  public result: string;
}
