import {validateSync} from 'class-validator';
import {formatError} from '../format';
import {ParameterBag} from '../ParameterBag';
import {ReturnGetBlockTransactions} from './ReturnGetBlockTransactions';

export class GetBlockTransactionsPayload extends ParameterBag {
  public data!: ReturnGetBlockTransactions;

  public constructor(data: ReturnGetBlockTransactions) {
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
