import {Expose} from 'class-transformer';
import {IsNumber} from 'class-validator';

export class ReturnConsensusblock {
  @Expose()
  @IsNumber()
  consensus_block: number;

  @Expose()
  @IsNumber()
  timestamp: number;
}
