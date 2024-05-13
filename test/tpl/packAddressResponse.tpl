import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { PackAddressResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<PackAddressResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
