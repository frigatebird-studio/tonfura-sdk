import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnTrylocatesourcetx} from './ReturnTrylocatesourcetx';

export class TrylocatesourcetxPaylod extends ParameterBag {
  public data!: ReturnTrylocatesourcetx;

  public constructor(data: ReturnTrylocatesourcetx) {
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
