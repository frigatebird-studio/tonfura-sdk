import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetConfigparam} from './ReturnGetConfigparam';

export class GetConfigparamPayload extends ParameterBag {
  public data!: ReturnGetConfigparam;

  public constructor(data: ReturnGetConfigparam) {
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
