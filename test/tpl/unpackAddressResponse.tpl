import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { UnpackAddressResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<UnpackAddressResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
