import 'reflect-metadata';

import axios, { AxiosInstance } from 'axios';
import { methodsMap } from '../pre-generate-params';
import { mock } from '../mock/lookupBlockResponse';
import { typeTest } from './utlis/type-helper';
import { responseTest } from './utlis/jsonRPCResponse-helper';
import { Network, Tonfura } from '~/src';
import { ReturnLookupBlock } from '~/src/types/output/ton_lookupBlock';

const mockedAxiosInstance = {
  post: vi.fn().mockResolvedValue(mock)
};

vi.spyOn(axios, 'create').mockReturnValue(
  mockedAxiosInstance as unknown as AxiosInstance
);

describe('lookupBlockResponse', () => {
  describe('should return correct payload', async () => {
    const tonfura = new Tonfura({
      apiKey: 'fake-api-key',
      network: Network.Mainnet
    });
    const methodSpy = vi.spyOn(
      await tonfura.config.getProvider(),
      'sendJsonRpcRequest'
    );

    const res = await tonfura.core.lookupBlock(methodsMap['lookupBlock']!);

    it('pass correct params', () => {
      expect(methodSpy).toHaveBeenCalledWith({
        method: 'ton_lookupBlock',
        params: methodsMap['lookupBlock']
      });
    });

    it('should return status 200', () => {
      expect(res.status).toBe(200);
    });

    it('should should return JsonRpcResponse', () => {
      responseTest(res.data);
    });

    it('payload check, should return 0 error', async () => {
      await typeTest(res.data.result, ReturnLookupBlock);
    });
  });
});
