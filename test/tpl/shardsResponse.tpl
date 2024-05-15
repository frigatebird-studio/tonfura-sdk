import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { ShardsResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<ShardsResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
