import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetWalletinformation} from './ReturnGetWalletinformation';

export class GetWalletinformationPayload extends ParameterBag {
  public data!: ReturnGetWalletinformation;

  public constructor(data: ReturnGetWalletinformation) {
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
