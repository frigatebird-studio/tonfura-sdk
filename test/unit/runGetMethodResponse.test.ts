import 'reflect-metadata';

import axios from 'axios';
import { mock } from '../mock/runGetMethodResponse';
import { methodsMap } from '../pre-generate-params';
import { typeTest } from './utlis/type-helper';
import { responseTest } from './utlis/jsonRPCResponse-helper';
import { ReturnCall } from '~/src/types/output/ton_runGetMethod';
import { Network, Tonfura } from '~/src';

vi.spyOn(axios, 'post').mockResolvedValue(mock);

describe('runGetMethodResponse', () => {
  describe('should return correct payload', async () => {
    const tonfura = new Tonfura({
      apiKey: 'fake-api-key',
      network: Network.Mainnet
    });
    const methodSpy = vi.spyOn(
      await tonfura.config.getProvider(),
      'sendJsonRpcRequest'
    );

    const res = await tonfura.core.runGetMethod(methodsMap['runGetMethod']!);

    it('pass correct params', () => {
      expect(methodSpy).toHaveBeenCalledWith(
        'ton_runGetMethod',
        methodsMap['runGetMethod']
      );
    });

    it('should return status 200', () => {
      expect(res.status).toBe(200);
    });

    it('should should return JsonRpcResponse', () => {
      responseTest(res.data);
    });

    it('payload check, should return 0 error', async () => {
      await typeTest(res.data.result, ReturnCall);
    });
  });
});
