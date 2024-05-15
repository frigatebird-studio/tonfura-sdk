import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetTokenDataResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetTokenDataResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
