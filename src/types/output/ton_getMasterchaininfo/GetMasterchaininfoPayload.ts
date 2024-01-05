import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetMasterchaininfo} from './ReturnGetMasterchaininfo';

export class GetMasterchaininfoPayload extends ParameterBag {
  public data!: ReturnGetMasterchaininfo;

  public constructor(data: ReturnGetMasterchaininfo) {
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
