import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { EstimatefeeResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<EstimatefeeResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
