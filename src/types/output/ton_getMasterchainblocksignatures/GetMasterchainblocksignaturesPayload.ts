import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetMasterchainblocksignatures} from './ReturnGetMasterchainblocksignatures';

export class GetMasterchainblocksignaturesPayload extends ParameterBag {
  public data!: ReturnGetMasterchainblocksignatures;

  public constructor(data: ReturnGetMasterchainblocksignatures) {
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
