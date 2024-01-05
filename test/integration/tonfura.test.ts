import { Tonfura } from '../../src/';
import { loadTonfuraEnv } from '../test-util';

jest.setTimeout(5000);
describe('E2E integration tests', () => {
  beforeAll(async () => {
    await loadTonfuraEnv();
  });

  const apiKey = 'fa76f595-8924-44e6-a6cd-4ea40df8666c';
  describe('Core', () => {
    describe('method', () => {
      const tonfura = new Tonfura({
        apiKey
      });
      const address = 'UQAo-WuNj5J7jnlRTwCXoGADI9GaM6UBO3AifTMXld9aAS50';
      const seqno = 15399132;
      const workchain = -1;
      const shard = '-9223372036854775808';

      test('getAddressInformation should return expected result', async () => {
        const response = await tonfura.core.getAddressInformation(address);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getExtendedAddressInformation should return expected result', async () => {
        const response = await tonfura.core.getExtendedAddressInformation(
          address
        );

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getWalletInformation should return expected result', async () => {
        const response = await tonfura.core.getWalletInformation(address);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getAddressBalance should return expected result', async () => {
        const response = await tonfura.core.getAddressBalance(address);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getAddressState should return expected result', async () => {
        const response = await tonfura.core.getAddressState(address);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('packAddress should return expected result', async () => {
        const response = await tonfura.core.packAddress(address);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('unpackAddress should return expected result', async () => {
        const response = await tonfura.core.unpackAddress(address);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getTokenData should return expected result', async () => {
        const response = await tonfura.core.getTokenData(
          'kQAPsblgQ-r-GFhorPcU2Z4E_2Ll3WrrbX0fRXY-p4jGeFwl'
        );

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('detectAddress should return expected result', async () => {
        const response = await tonfura.core.detectAddress(address);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getMasterchainInfo should return expected result', async () => {
        const response = await tonfura.core.getMasterchainInfo();

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getMasterchainBlockSignatures should return expected result', async () => {
        const response = await tonfura.core.getMasterchainBlockSignatures(
          seqno
        );

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getShardBlockProof should return expected result', async () => {
        const response = await tonfura.core.getShardBlockProof({
          workchain,
          shard,
          seqno
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getConsensusBlock should return expected result', async () => {
        const response = await tonfura.core.getConsensusBlock();

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('lookupBlock should return expected result', async () => {
        const response = await tonfura.core.lookupBlock({
          workchain,
          shard,
          seqno
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('shards should return expected result', async () => {
        const response = await tonfura.core.shards(15399132);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getBlockHeader should return expected result', async () => {
        const response = await tonfura.core.getBlockHeader({
          workchain: -1,
          shard: '-9223372036854775808',
          seqno: 15404917
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getTransactions should return expected result', async () => {
        const response = await tonfura.core.getTransactions({
          address: 'kf_Aa3RDuW1CQ79Lt4VqkoX0Ka-kY0GrBqrinJrnYX655Yp7',
          limit: 2,
          archival: false
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getBlockTransactions should return expected result', async () => {
        const response = await tonfura.core.getBlockTransactions({
          workchain,
          shard,
          seqno
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('tryLocateTx should return expected result', async () => {
        const response = await tonfura.core.tryLocateTx({
          source: 'EQCSES0TZYqcVkgoguhIb8iMEo4cvaEwmIrU5qbQgnN8fmvP',
          destination: 'EQCeU9XIp1rlm2orSBGythpg-bIZ2hwCT_5IhSQDi87DAz7I',
          created_lt: 17447297000003
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('tryLocateResultTx should return expected result', async () => {
        const response = await tonfura.core.tryLocateResultTx({
          source: 'EQCSES0TZYqcVkgoguhIb8iMEo4cvaEwmIrU5qbQgnN8fmvP',
          destination: 'EQCeU9XIp1rlm2orSBGythpg-bIZ2hwCT_5IhSQDi87DAz7I',
          created_lt: 17447297000003
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('tryLocateSourceTx should return expected result', async () => {
        const response = await tonfura.core.tryLocateSourceTx({
          source: 'EQCSES0TZYqcVkgoguhIb8iMEo4cvaEwmIrU5qbQgnN8fmvP',
          destination: 'EQCeU9XIp1rlm2orSBGythpg-bIZ2hwCT_5IhSQDi87DAz7I',
          created_lt: 17447297000003
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('getConfigParam should return expected result', async () => {
        const response = await tonfura.core.getConfigParam({
          config_id: 1
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('runGetMethod should return expected result', async () => {
        const response = await tonfura.core.runGetMethod({
          address,
          method: 'get_public_key',
          stack: []
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test('estimateFee should return expected result', async () => {
        const response = await tonfura.core.estimateFee({
          address,
          body: 'te6cckEBAgEAjQABnEAP/HX9U+OT/lJtRe5ck/Y5UMr9t0MU/163cJYpu/BKO4UxqgrgyFSVV0pDLYJvESsToL2f6uRS0L6R8u6OIwQpqaMXZYWDSAAAAAwAAwEAdEIAN7Dv9m9M/bVcb8qLZKVnYjeoLWyGzsuwLfyHq0DapnMcxLQAAAAAAAAAAAAAAAAAAAAAAABiYmKhzku0'
        });

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });
    });
  });

  describe('Transact', () => {
    describe('method', () => {
      const tonfura = new Tonfura({
        apiKey
      });
      const boc =
        'te6cckEBAgEAjQABnEAP/HX9U+OT/lJtRe5ck/Y5UMr9t0MU/163cJYpu/BKO4UxqgrgyFSVV0pDLYJvESsToL2f6uRS0L6R8u6OIwQpqaMXZYWDSAAAAAwAAwEAdEIAN7Dv9m9M/bVcb8qLZKVnYjeoLWyGzsuwLfyHq0DapnMcxLQAAAAAAAAAAAAAAAAAAAAAAABiYmKhzku0';

      test.skip('sendBoc should return expected result', async () => {
        const response = await tonfura.transact.sendBoc(boc);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test.skip('sendBocReturnHash should return expected result', async () => {
        const response = await tonfura.transact.sendBocReturnHash(boc);

        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('jsonrpc');
        expect(response.data).toHaveProperty('result');
      });

      test.skip('sendQuery should return expected result', async () => {
        // const response = await tonfura.transact.sendQuery({
        //   address: '',
        //   body: '',
        //   init_code: '',
        //   init_data: ''
        // });
        // expect(response.data).toHaveProperty('id');
        // expect(response.data).toHaveProperty('jsonrpc');
        // expect(response.data).toHaveProperty('result');
      });
    });
  });
});
