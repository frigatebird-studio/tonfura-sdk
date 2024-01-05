import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnUnpackAddress} from './ReturnUnpackAddress';

export class UnpackAddressPayload extends ParameterBag {
  public data!: ReturnUnpackAddress;

  public constructor(data: ReturnUnpackAddress) {
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
