import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnTrylocateresulttx} from './ReturnTrylocateresulttx';

export class TrylocateresulttxPaylod extends ParameterBag {
  public data!: ReturnTrylocateresulttx;

  public constructor(data: ReturnTrylocateresulttx) {
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
