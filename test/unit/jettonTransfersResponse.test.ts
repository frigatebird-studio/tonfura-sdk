import 'reflect-metadata';

import axios from 'axios';
import { methodsMap } from '../pre-generate-params';
import { mock } from '../mock/jettonTransfersResponse';
import { typeTest } from './utlis/type-helper';
import { responseTest } from './utlis/jsonRPCResponse-helper';
import { Network, Tonfura } from '~/src';
import { ReturnJettonTransfer } from '~/src/types/output/ton_jetton_transfers';

vi.spyOn(axios, 'post').mockResolvedValue(mock);

describe('jettonTransfersResponse', () => {
  describe('should return correct payload', async () => {
    const tonfura = new Tonfura({
      apiKey: 'fake-api-key',
      network: Network.Mainnet
    });
    const methodSpy = vi.spyOn(
      await tonfura.config.getProvider(),
      'sendJsonRpcRequest'
    );

    const res = await tonfura.core.jettonTransfers(
      methodsMap['jettonTransfers']!
    );

    it('pass correct params', () => {
      expect(methodSpy).toHaveBeenCalledWith(
        'ton_jetton_transfers',
        methodsMap['jettonTransfers'],
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
      await typeTest(res.data.result, ReturnJettonTransfer);
    });
  });
});
