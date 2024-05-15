import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetAddressbalanceResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetAddressbalanceResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
