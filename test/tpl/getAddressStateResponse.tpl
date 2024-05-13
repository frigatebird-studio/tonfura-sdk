import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetAddressstateResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetAddressstateResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
