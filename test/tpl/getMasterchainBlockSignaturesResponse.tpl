import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetMasterchainBlockSignaturesResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetMasterchainBlockSignaturesResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
