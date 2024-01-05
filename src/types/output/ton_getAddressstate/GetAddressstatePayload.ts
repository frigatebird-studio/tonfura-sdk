import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetAddressstate} from './ReturnGetAddressstate';

export class GetAddressstatePayload extends ParameterBag {
  public data!: ReturnGetAddressstate;

  public constructor(data: ReturnGetAddressstate) {
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
