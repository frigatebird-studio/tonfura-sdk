import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { JettonMastersResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<JettonMastersResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
