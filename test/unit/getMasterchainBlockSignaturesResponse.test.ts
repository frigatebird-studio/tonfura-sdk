import 'reflect-metadata';

import axios from 'axios';
import { mock } from '../mock/getMasterchainBlockSignaturesResponse';
import { blockMethodsMap } from '../pre-generate-params';
import { typeTest } from './utlis/type-helper';
import { Network, Tonfura } from '~/src';
import { ReturnGetMasterchainblocksignatures } from '~/src/types/output/ton_getMasterchainblocksignatures';

vi.spyOn(axios, 'post').mockResolvedValue(mock);

describe('getMasterchainBlockSignaturesResponse', () => {
  describe('should return correct payload', async () => {
    const tonfura = new Tonfura({
      apiKey: 'fake-api-key',
      network: Network.Mainnet
    });
    const methodSpy = vi.spyOn(
      await tonfura.config.getProvider(),
      'sendJsonRpcRequest'
    );

    const res = await tonfura.core.getMasterchainBlockSignatures(
      blockMethodsMap['getMasterchainBlockSignatures']!
    );

    it('pass correct params', () => {
      expect(methodSpy).toHaveBeenCalledWith(
        'ton_getMasterchainBlockSignatures',
        {
          seqno: blockMethodsMap['getMasterchainBlockSignatures']
        }
      );
    });

    it('should return status 200', () => {
      expect(res.status).toBe(200);
    });

    it('payload check, should return 0 error', async () => {
      await typeTest(res.data.result, ReturnGetMasterchainblocksignatures);
    });
  });
});
