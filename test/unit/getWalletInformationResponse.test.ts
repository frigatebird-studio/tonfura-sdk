import 'reflect-metadata';

import axios, { AxiosInstance } from 'axios';
import { methodsMap } from '../pre-generate-params';
import { mock } from '../mock/getWalletInformationResponse';
import { typeTest } from './utlis/type-helper';
import { responseTest } from './utlis/jsonRPCResponse-helper';
import { Network, Tonfura } from '~/src';
import { ReturnGetWalletinformation } from '~/src/types/output/ton_getWalletinformation';

const mockedAxiosInstance = {
  post: vi.fn().mockResolvedValue(mock)
};

vi.spyOn(axios, 'create').mockReturnValue(
  mockedAxiosInstance as unknown as AxiosInstance
);

describe('getWalletInformationResponse', () => {
  describe('should return correct payload', async () => {
    const tonfura = new Tonfura({
      apiKey: 'fake-api-key',
      network: Network.Mainnet
    });
    const methodSpy = vi.spyOn(
      await tonfura.config.getProvider(),
      'sendJsonRpcRequest'
    );

    const res = await tonfura.core.getWalletInformation(
      methodsMap['getWalletInformation']!
    );

    it('pass correct params', () => {
      expect(methodSpy).toHaveBeenCalledWith({
        method: 'ton_getWalletInformation',
        params: {
          address: methodsMap['getWalletInformation']
        }
      });
    });

    it('should return status 200', () => {
      expect(res.status).toBe(200);
    });

    it('should should return JsonRpcResponse', () => {
      responseTest(res.data);
    });

    it('payload check, should return 0 error', async () => {
      await typeTest(res.data.result, ReturnGetWalletinformation);
    });
  });
});
