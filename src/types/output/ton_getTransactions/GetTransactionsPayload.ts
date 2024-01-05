import {ValidateNested, validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetTransactions} from './ReturnGetTransactions';

export class GetTransactionsPayload extends ParameterBag {
  @ValidateNested()
  public data!: ReturnGetTransactions[];

  public constructor(data: ReturnGetTransactions[]) {
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
