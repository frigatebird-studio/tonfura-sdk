import 'reflect-metadata';

import axios from 'axios';
import { blockMethodsMap } from '../pre-generate-params';
import { mock } from '../mock/getBlockTransactionsResponse';
import { typeTest } from './utlis/type-helper';
import { responseTest } from './utlis/jsonRPCResponse-helper';
import { Network, Tonfura } from '~/src';
import { ReturnGetBlockTransactions } from '~/src/types/output/ton_getBlockTransactions';

vi.spyOn(axios, 'post').mockResolvedValue(mock);

describe('getBlockTransactionsResponse', () => {
  describe('should return correct payload', async () => {
    const tonfura = new Tonfura({
      apiKey: 'fake-api-key',
      network: Network.Mainnet
    });
    const methodSpy = vi.spyOn(
      await tonfura.config.getProvider(),
      'sendJsonRpcRequest'
    );

    const res = await tonfura.core.getBlockTransactions(
      blockMethodsMap['getBlockTransactions']!
    );

    it('pass correct params', () => {
      expect(methodSpy).toHaveBeenCalledWith(
        'ton_getBlockTransactions',
        blockMethodsMap['getBlockTransactions']
      );
    });

    it('should return status 200', () => {
      expect(res.status).toBe(200);
    });

    it('should should return JsonRpcResponse', () => {
      responseTest(res.data);
    });

    it('payload check, should return 0 error', async () => {
      await typeTest(res.data.result, ReturnGetBlockTransactions);
    });
  });
});
