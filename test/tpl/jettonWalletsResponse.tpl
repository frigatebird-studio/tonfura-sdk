import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { JettonWalletsResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<JettonWalletsResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
