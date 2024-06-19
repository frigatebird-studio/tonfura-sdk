export type GetAddressInformationParams = {
  address: string;
};

export type GetAddressInformationResult =
  import('./output/ton_getAddressInformation').ReturnGetAddressInfromation;

export type GetExtendedaddressinformationParams = {
  address: string;
};

export type GetExtendedaddressinformationResult =
  import('./output/ton_getExtendedaddressinformation').ReturnGetExtendedaddressinformation;

export type GetWalletinformationParams = {
  address: string;
};

export type GetWalletinformationResult =
  import('./output/ton_getWalletinformation').ReturnGetWalletinformation;

export type GetAddressbalanceParams = {
  address: string;
};

export type GetAddressbalanceResult =
  import('./output/ton_getAddressBalance').ReturnGetAddressBalance;

export type GetAddressstateParams = {
  address: string;
};

export type GetAddressstateResult =
  import('./output/ton_getAddressstate').ReturnGetAddressState;

export type PackAddressParams = {
  address: string;
};

export type PackAddressResult =
  import('./output/ton_packAddress').ReturnPackAddress;

export type UnpackAddressParams = {
  address: string;
};

export type UnpackAddressResult =
  import('./output/ton_unpackAddress').ReturnUnpackAddress;

export type GetTokenDataParams = {
  address: string;
};

export type GetTokenDataResult =
  import('./output/ton_getTokenData').ReturnGetTokenData;

export type DetectAddressParams = {
  address: string;
};

export type DetectAddressResult =
  import('./output/ton_detectAddress').ReturnDetectAddress;

export type GetMasterchainInfoParams = {};

export type GetMasterchainInfoResult =
  import('./output/ton_getMasterchaininfo').ReturnGetMasterchaininfo;

export type GetMasterchainBlockSignaturesParams = {
  seqno: number;
};

export type GetMasterchainBlockSignaturesResult =
  import('./output/ton_getMasterchainblocksignatures').ReturnGetMasterchainblocksignatures;

export type GetShardBlockProofParams = {
  workchain: number;
  shard: string;
  seqno: number;
  from_seqno?: number;
};

export type GetShardBlockProofResult =
  import('./output/ton_getShardblockproof').ReturnGetShardblockproof;

export type GetConsensusBlockParams = {};

export type GetConsensusBlockResult =
  import('./output/ton_getConsensusblock').ReturnConsensusblock;

export type LookupBlockParams = {
  workchain: number;
  shard: string;
  seqno: number;
  lt?: number;
  unixtime?: string;
};

export type LookupBlockResult =
  import('./output/ton_lookupBlock').ReturnLookupBlock;

export type ShardsParams = {
  seqno: number;
};

export type ShardsResult = import('./output/ton_shards').ReturnShard;

export type GetBlockHeaderParams = {
  workchain: number;
  shard: string;
  seqno: number;
  root_hash?: string;
  file_hash?: string;
};

export type GetBlockHeaderResult =
  import('./output/ton_getBlockheader').ReturnGetBlockheader;

export type GetTransactionsParams = {
  address: string;
  limit: number;
  lt?: number;
  hash?: string;
  to_lt?: number;
  archival?: boolean;
};

export type GetTransactionsResult =
  import('./output/ton_getTransactions').ReturnGetTransactions[];

export type GetBlockTransactionsParams = {
  workchain: number;
  shard: string;
  seqno: number;
  root_hash?: string;
  file_hash?: string;
  after_lt?: number;
  after_hash?: string;
  count?: number;
};

export type GetBlockTransactionsResult =
  import('./output/ton_getBlockTransactions').ReturnGetBlockTransactions;

export type TryLocateTxParams = {
  source: string;
  destination: string;
  created_lt: number;
};

export type TryLocateTxResult =
  import('./output/ton_trylocatetx').ReturnTrylocatetx;

export type TryLocateResultTxParams = {
  source: string;
  destination: string;
  created_lt: number;
};

export type TryLocateResultTxResult =
  import('./output/ton_trylocateresulttx').ReturnTrylocateresulttx;

export type TryLocateSourceTxParams = {
  source: string;
  destination: string;
  created_lt: number;
};

export type TryLocateSourceTxResult =
  import('./output/ton_trylocatesourcetx').ReturnTrylocatesourcetx;

export type GetConfigParamParams = {
  config_id: number;
  seqno?: number;
};

export type GetConfigParamResult =
  import('./output/ton_getConfigparam').ReturnGetConfigparam;

export type RunGetMethodParams = {
  address: string;
  method: string;
  stack: [];
};

export type RunGetMethodResult = import('./output/ton_runGetMethod').ReturnCall;

export type EstimatefeeParams = {
  address: string;
  body: string;
  init_code?: string;
  init_data?: string;
  ignore_chksig?: string;
};

export type EstimatefeeResult =
  import('./output/ton_estimatefee').ReturnEstimatefee;

export type SendBocParams = {
  boc: string;
};

export type SendBocResult = import('./output/ton_sendBoc').ReturnSendBoc;

export type SendBocReturnHashParams = {
  boc: string;
};

export type SendBocReturnHashResult =
  import('./output/ton_sendBoc').ReturnSendBoc;
