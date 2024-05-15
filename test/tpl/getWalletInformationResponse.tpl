import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetWalletinformationResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<GetWalletinformationResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
