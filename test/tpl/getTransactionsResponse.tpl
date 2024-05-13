import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetTransactionsResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetTransactionsResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
