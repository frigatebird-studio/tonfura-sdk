import 'reflect-metadata';

import axios, { AxiosInstance } from 'axios';
import { mock } from '../mock/getMasterchainBlockSignaturesResponse';
import { blockMethodsMap } from '../pre-generate-params';
import { typeTest } from './utlis/type-helper';
import { Network, Tonfura } from '~/src';
import { ReturnGetMasterchainblocksignatures } from '~/src/types/output/ton_getMasterchainblocksignatures';

const mockedAxiosInstance = {
  post: vi.fn().mockResolvedValue(mock)
};

vi.spyOn(axios, 'create').mockReturnValue(
  mockedAxiosInstance as unknown as AxiosInstance
);

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
      expect(methodSpy).toHaveBeenCalledWith({
        method: 'ton_getMasterchainBlockSignatures',
        params: {
          seqno: blockMethodsMap['getMasterchainBlockSignatures']
        }
      });
    });

    it('should return status 200', () => {
      expect(res.status).toBe(200);
    });

    it('payload check, should return 0 error', async () => {
      await typeTest(res.data.result, ReturnGetMasterchainblocksignatures);
    });
  });
});
