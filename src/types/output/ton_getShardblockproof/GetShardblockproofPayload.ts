import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetShardblockproof} from './ReturnGetShardblockproof';

export class GetShardblockproofPayload extends ParameterBag {
  public data!: ReturnGetShardblockproof;

  public constructor(data: ReturnGetShardblockproof) {
    super();

    this.data = data;

    this.validate();
  }

  public validate(): void {
    this.errors = [];

    validateSync(this.data).forEach(error => {
      this.errors.push(...formatError(error, true));
    });
  }
}
