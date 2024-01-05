import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnSendBoc} from './ReturnSendBoc';

export class SendTransctionsPaylod extends ParameterBag {
  public data!: ReturnSendBoc;

  public constructor(data: ReturnSendBoc) {
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
