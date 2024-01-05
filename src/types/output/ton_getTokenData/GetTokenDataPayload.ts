import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetTokenData} from './ReturnGetTokenData';

export class GetTokenDataPayload extends ParameterBag {
  public data!: ReturnGetTokenData;

  public constructor(data: ReturnGetTokenData) {
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
