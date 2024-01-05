import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnConsensusblock} from './ReturnConsensusblock';

export class ConsensusblockPayload extends ParameterBag {
  public data!: ReturnConsensusblock;

  public constructor(data: ReturnConsensusblock) {
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
