import { JsonRpcSuccessResponse } from '~/src/types/json-rpc-types';
import { GetAddressInformationResult } from '~/src/types/ton-types';

type MockResponse = {
  status: number;
  data: JsonRpcSuccessResponse<
  GetAddressInformationResult & {
      '@extra': string;
    }
  >;
};
export const mock: MockResponse = {
  status: {{status}},
  data: {{data}}
};
