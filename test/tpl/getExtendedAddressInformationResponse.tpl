import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetExtendedaddressinformationResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetExtendedaddressinformationResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
