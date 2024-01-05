import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnDetectAddress} from './ReturnDetectAddress';

export class DetectAddressPayload extends ParameterBag {
  public data!: ReturnDetectAddress;

  public constructor(data: ReturnDetectAddress) {
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
