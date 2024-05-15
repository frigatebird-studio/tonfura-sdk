import { Core } from '~/src';
export type MethodName = keyof Core;

export type MethodParams = {
  [K in MethodName]?: Parameters<Core[K]>[0];
};

export const methodsMap: MethodParams = {
  getMasterchainInfo: undefined,
  getAddressBalance: 'Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF',
  getAddressInformation: 'Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF',
  getAddressState: 'Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF',
  getConfigParam: {
    config_id: -1
  },
  getConsensusBlock: undefined,
  getExtendedAddressInformation:
    'Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF',
  getWalletInformation: 'Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF',
  detectAddress: 'Ef8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM0vF',
  packAddress:
    '0:83dfd552e63729b472fcbcc8c45ebcc6691702558b68ec7527e1ba403a0f31a8',
  unpackAddress: 'UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI',
  getTokenData: 'EQCPmOnkTe8qP_ZtCf3Rys04ukRTiQc_xVS-lGQ6BH3JZWmC',
  estimateFee: {
    address: 'UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqEBI',
    body: 'te6cckEBAgEAjQABnEAP/HX9U+OT/lJtRe5ck/Y5UMr9t0MU/163cJYpu/BKO4UxqgrgyFSVV0pDLYJvESsToL2f6uRS0L6R8u6OIwQpqaMXZYWDSAAAAAwAAwEAdEIAN7Dv9m9M/bVcb8qLZKVnYjeoLWyGzsuwLfyHq0DapnMcxLQAAAAAAAAAAAAAAAAAAAAAAABiYmKhzku0'
  },
  getTransactions: {
    address: 'EQBO7JIbnU1WoNlGdgFtScJrObHXkBp-FT5mAz8UagiG9KQR',
    limit: 10
  },
  runGetMethod: {
    address: 'EQBO7JIbnU1WoNlGdgFtScJrObHXkBp-FT5mAz8UagiG9KQR',
    method: 'get_wallet_data',
    stack: []
  },
  jettonMasters: {
    limit: 2
  },
  jettonWallets: {
    limit: 2
  },
  jettonTransfers: {
    limit: 2
  },
  jettonBurns: {
    limit: 2
  },
  nftItems: {
    limit: 2
  }
};

export const blockMethodsMap: MethodParams = {
  getMasterchainBlockSignatures: 0,
  shards: 0
};
