import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { NFTItemsResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<NFTItemsResult>;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
