// @ts-nocheck
import fs from 'fs';
import { methodsMap } from './pre-generate-params';
import { Network, Tonfura } from '~/src';

const renderFile = (method: string, res: any) => {
  const tpl = fs.readFileSync(
    `${__dirname}/tpl/${method}Response.tpl`,
    'utf-8'
  );

  const render = tpl
    .replace('{{status}}', res.status)
    .replace('{{data}}', JSON.stringify(res.data));

  fs.writeFileSync(`${__dirname}/mock/${method}Response.ts`, render);
};

const apiKey = process.argv[2];
if (!apiKey) {
  throw new Error('API key is required');
}

const main = async () => {
  const tonfura = new Tonfura({
    apiKey,
    network: Network.Mainnet
  });

  // general
  for (const [method, params] of Object.entries(methodsMap)) {
    const fn = tonfura.core[method as MethodName] as (
      params: unknown
    ) => Promise<unknown>;
    const res = (await fn.apply(tonfura.core, [params])) as any;
    renderFile(method, res);
  }

  // need to run after get the lastest block
  const consensusBlock = await import('./mock/getConsensusBlockResponse');
  const blockParamMap = {
    seqno: consensusBlock.mock.data.result.consensus_block
  };

  const blockSignaturesRes = await tonfura.core.getMasterchainBlockSignatures(
    blockParamMap.seqno
  );

  renderFile('getMasterchainBlockSignatures', blockSignaturesRes);

  blockParamMap.workchainId = blockSignaturesRes.data.result?.id.workchain;
  blockParamMap.shard = blockSignaturesRes.data.result?.id.shard;

  const shardsRes = await tonfura.core.shards(blockParamMap.seqno);

  renderFile('shards', shardsRes);

  const shardBlockProofRes = await tonfura.core.getShardBlockProof({
    workchain: blockParamMap.workchainId,
    shard: blockParamMap.shard,
    seqno: blockParamMap.seqno
  });

  renderFile('getShardBlockProof', shardBlockProofRes);

  const blockTransactionsRes = await tonfura.core.getBlockTransactions({
    workchain: blockParamMap.workchainId,
    shard: blockParamMap.shard,
    seqno: blockParamMap.seqno
  });

  renderFile('getBlockTransactions', blockTransactionsRes);

  const blockHeaderRes = await tonfura.core.getBlockHeader({
    workchain: blockParamMap.workchainId,
    shard: blockParamMap.shard,
    seqno: blockParamMap.seqno
  });

  renderFile('getBlockHeader', blockHeaderRes);

  const lookupBlockRes = await tonfura.core.lookupBlock({
    workchain: blockParamMap.workchainId,
    shard: blockParamMap.shard,
    seqno: blockParamMap.seqno
  });

  renderFile('lookupBlock', lookupBlockRes);
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
