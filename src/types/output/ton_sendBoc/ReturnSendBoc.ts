/* istanbul ignore file -- @preserve */
import {IsString} from 'class-validator';

export class ReturnSendBoc {
  @IsString()
  '@type': string;

  @IsString()
  '@extra': string;
}
