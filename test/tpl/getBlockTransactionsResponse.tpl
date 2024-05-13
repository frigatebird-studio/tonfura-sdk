import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetBlockTransactionsResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetBlockTransactionsResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
