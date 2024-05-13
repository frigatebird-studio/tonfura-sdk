import 'reflect-metadata';

import axios from 'axios';
import { methodsMap } from '../pre-generate-params';
import { mock } from '../mock/getConfigParamResponse';
import { typeTest } from './utlis/type-helper';
import { responseTest } from './utlis/jsonRPCResponse-helper';
import { Network, Tonfura } from '~/src';
import { ReturnGetConfigparam } from '~/src/types/output/ton_getConfigparam';

vi.spyOn(axios, 'post').mockResolvedValue(mock);

describe('getConfigParamResponse', () => {
  describe('should return correct payload', async () => {
    const tonfura = new Tonfura({
      apiKey: 'fake-api-key',
      network: Network.Mainnet
    });
    const methodSpy = vi.spyOn(
      await tonfura.config.getProvider(),
      'sendJsonRpcRequest'
    );

    const res = await tonfura.core.getConfigParam(
      methodsMap['getConfigParam']!
    );

    it('pass correct params', () => {
      expect(methodSpy).toHaveBeenCalledWith(
        'ton_getConfigParam',
        methodsMap['getConfigParam']
      );
    });

    it('should return status 200', () => {
      expect(res.status).toBe(200);
    });

    it('should should return JsonRpcResponse', () => {
      responseTest(res.data);
    });

    it('payload check, should return 0 error', async () => {
      await typeTest(res.data.result, ReturnGetConfigparam);
    });
  });
});
