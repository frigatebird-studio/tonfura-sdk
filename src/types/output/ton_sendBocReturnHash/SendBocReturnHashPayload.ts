import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnSendBocReturnHash} from './ReturnSendBocReturnHash';

export class SendBocReturnHashPayload extends ParameterBag {
  public data!: ReturnSendBocReturnHash;

  public constructor(data: ReturnSendBocReturnHash) {
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
