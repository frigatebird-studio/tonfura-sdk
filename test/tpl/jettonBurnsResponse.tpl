import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { JettonBurnsResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<JettonBurnsResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
