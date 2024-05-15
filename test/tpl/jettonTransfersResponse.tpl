import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { JettonTransfersResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<JettonTransfersResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
