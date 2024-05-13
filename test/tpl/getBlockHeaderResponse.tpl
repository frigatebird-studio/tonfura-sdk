import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetBlockHeaderResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetBlockHeaderResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
