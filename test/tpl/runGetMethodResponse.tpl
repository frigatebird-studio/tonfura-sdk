import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { RunGetMethodResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<RunGetMethodResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
