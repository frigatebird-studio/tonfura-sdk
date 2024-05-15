import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetMasterchainInfoResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<
    GetMasterchainInfoResult & {
      '@extra': string;
    }
  >;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
