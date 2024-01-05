import {IsString} from 'class-validator';
import {Expose} from 'class-transformer';

export class ReturnPackAddress {
  @Expose()
  @IsString()
  public result: string;
}
