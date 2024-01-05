import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetExtendedaddressinformation} from './ReturnGetExtendedaddressinformation';

export class GetExtendedaddressinformationPayload extends ParameterBag {
  public data!: ReturnGetExtendedaddressinformation;

  public constructor(data: ReturnGetExtendedaddressinformation) {
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
