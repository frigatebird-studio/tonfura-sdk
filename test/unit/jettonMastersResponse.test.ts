import 'reflect-metadata';

import axios from 'axios';
import { methodsMap } from '../pre-generate-params';
import { mock } from '../mock/jettonMastersResponse';
import { typeTest } from './utlis/type-helper';
import { responseTest } from './utlis/jsonRPCResponse-helper';
import { Network, Tonfura } from '~/src';
import { ReturnJettonMaster } from '~/src/types/output/ton_jetton_masters';

vi.spyOn(axios, 'post').mockResolvedValue(mock);

describe('jettonMastersResponse', () => {
  describe('should return correct payload', async () => {
    const tonfura = new Tonfura({
      apiKey: 'fake-api-key',
      network: Network.Mainnet
    });
    const methodSpy = vi.spyOn(
      await tonfura.config.getProvider(),
      'sendJsonRpcRequest'
    );

    const res = await tonfura.core.jettonMasters(methodsMap['jettonMasters']!);

    it('pass correct params', () => {
      expect(methodSpy).toHaveBeenCalledWith(
        'ton_jetton_masters',
        methodsMap['jettonMasters'],
        'v2'
      );
    });

    it('should return status 200', () => {
      expect(res.status).toBe(200);
    });

    it('should should return JsonRpcResponse', () => {
      responseTest(res.data);
    });

    it('payload check, should return 0 error', async () => {
      await typeTest(res.data.result, ReturnJettonMaster);
    });
  });
});
