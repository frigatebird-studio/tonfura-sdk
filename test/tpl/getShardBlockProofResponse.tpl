import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetShardBlockProofResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetShardBlockProofResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
