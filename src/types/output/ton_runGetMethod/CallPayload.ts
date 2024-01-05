import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnCall} from './ReturnCall';

export class CallPayloadPayload extends ParameterBag {
  public data!: ReturnCall;

  public constructor(data: ReturnCall) {
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
