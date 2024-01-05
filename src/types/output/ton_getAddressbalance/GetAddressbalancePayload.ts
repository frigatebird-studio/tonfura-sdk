import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetAddressbalance} from './ReturnGetAddressbalance';

export class GetAddressbalancePayload extends ParameterBag {
  public data!: ReturnGetAddressbalance;

  public constructor(data: ReturnGetAddressbalance) {
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
