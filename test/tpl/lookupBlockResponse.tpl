import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { LookupBlockResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<LookupBlockResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
