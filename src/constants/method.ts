export enum MethodV1 {
  // accounts
  TON_GET_ADDRESS_INFO = 'ton_getAddressInformation',
  TON_GET_EXTENDEDADDRESSINFORMATION = 'ton_getExtendedAddressInformation',
  TON_GET_WALLET_INFORMATION = 'ton_getWalletInformation',
  TON_GET_ADDRESS_BALANCE = 'ton_getAddressBalance',
  TON_GET_ADDRESSSTATE = 'ton_getAddressState',
  TON_PACK_ADDRESS = 'ton_packAddress',
  TON_UNPACK_ADDRESS = 'ton_unpackAddress',
  TON_DETECT_ADDRESS = 'ton_detectAddress',
  TON_GET_TOKEN_DATA = 'ton_getTokenData',
  // blocks
  TON_GET_MASTERCHAININFO = 'ton_getMasterchainInfo',
  TON_GET_MASTERCHAINBLOCKSIGNATURES = 'ton_getMasterchainBlockSignatures',
  TON_GET_SHARDBLOCKPROOF = 'ton_getShardBlockProof',
  TON_GET_CONSENSUSBLOCK = 'ton_getConsensusBlock',
  TON_LOOKUP_BLOCK = 'ton_lookupBlock',
  TON_SHARDS = 'ton_shards',
  TON_GET_BLOCKHEADER = 'ton_getBlockHeader',
  // transactions
  TON_GET_TRANSACTIONS = 'ton_getTransactions',
  TON_GET_BLOCK_TRANSACTIONS = 'ton_getBlockTransactions',
  TON_TRYLOCATETX = 'ton_tryLocateTx',
  TON_TRYLOCATERESULTTX = 'ton_tryLocateResultTx',
  TON_TRYLOCATESOURCETX = 'ton_tryLocateSourceTx',
  // get config
  TON_GET_CONFIGPARAM = 'ton_getConfigParam',
  // run method
  TON_RUN_GET_METHOD = 'ton_runGetMethod',
  // send
  TON_SEND_BOC = 'ton_sendBoc',
  TON_SEND_BOC_RETURN_HASH = 'ton_sendBocReturnHash',
  TON_ESTIMATEFEE = 'ton_estimateFee'
}

export enum MethodV2 {}
