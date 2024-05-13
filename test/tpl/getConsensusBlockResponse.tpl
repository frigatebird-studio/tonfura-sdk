import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetConsensusBlockResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetConsensusBlockResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
