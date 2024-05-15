import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetConfigParamResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetConfigParamResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
