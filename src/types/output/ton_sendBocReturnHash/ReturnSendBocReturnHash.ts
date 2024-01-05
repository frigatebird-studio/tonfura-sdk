import {Expose} from 'class-transformer';
import {IsString} from 'class-validator';

export class ReturnSendBocReturnHash {
  @Expose()
  @IsString()
  '@type': string;

  @Expose()
  @IsString()
  hash: string;

  @Expose()
  @IsString()
  '@extra': string;
}
