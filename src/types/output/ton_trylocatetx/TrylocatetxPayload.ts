import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnTrylocatetx} from './ReturnTrylocatetx';

export class TrylocatetxPaylod extends ParameterBag {
  public data!: ReturnTrylocatetx;

  public constructor(data: ReturnTrylocatetx) {
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
