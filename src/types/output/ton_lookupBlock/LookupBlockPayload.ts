import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnLookupBlock} from './ReturnLookupBlock';

export class LookupBlockPayload extends ParameterBag {
  public data!: ReturnLookupBlock;

  public constructor(data: ReturnLookupBlock) {
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
