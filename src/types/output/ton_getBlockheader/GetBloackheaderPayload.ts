import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetBlockheader} from './ReturnGetBlockheader';

export class GetBlockheaderPayload extends ParameterBag {
  public data!: ReturnGetBlockheader;

  public constructor(data: ReturnGetBlockheader) {
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
