import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetAddressInfromation} from './ReturnGetAddressInfromation';

export class GetAddressInfromationPayload extends ParameterBag {
  public data!: ReturnGetAddressInfromation;

  public constructor(data: ReturnGetAddressInfromation) {
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
