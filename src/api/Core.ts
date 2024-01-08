import { AxiosResponse } from 'axios';

import { Method } from '../constants';
import { httpClient } from '../utils';
import { JSONRPC, JSONRPCRequest, JSONRPCResponse } from './JsonRpc';
import { TonfuraConfig } from './TonfuraConfig';

/**
 * The Core contains all commonly-used methods.
 *
 * Do not call this constructor directly. Instead, instantiate an Tonfura object
 * with `const tonfura = new Tonfura(config)` and then access the Core via `tonfura.core`.
 */
export class Core {
  /** @internal */
  private commonParams;
  constructor(private readonly config: TonfuraConfig) {
    this.commonParams = {
      jsonrpc: JSONRPC,
      id: this.config.id
    };
  }

  /**
   * Returns the information of a given address.
   * Information includes the balance, code, data and last_transaction_id
   *
   * @param address The address of the account.
   * @public
   */
  async getAddressInformation(
    address: TonfuraSDK.Core.GetAddressInformation.Params['address']
  ) {
    return httpClient.post<
      TonfuraSDK.Core.GetAddressInformation.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetAddressInformation.Response>,
        TonfuraSDK.Core.GetAddressInformation.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetAddressInformation.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_ADDRESS_INFO,
      params: { address }
    });
  }

  /**
   * Returns more information of a given address.
   * Information not only includes the balance, code, data and last_transaction_id,
   * But also includes the parsed additional information for known contract types
   * This method is based on tonlib's function getAccountState.
   * For detecting wallets we recommend to use getWalletInformation.
   *
   * @param address The address of the account.
   * @public
   */
  async getExtendedAddressInformation(
    address: TonfuraSDK.Core.GetExtendedaddressinformation.Params['address']
  ) {
    return httpClient.post<
      TonfuraSDK.Core.GetExtendedaddressinformation.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetExtendedaddressinformation.Response>,
        TonfuraSDK.Core.GetExtendedaddressinformation.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetExtendedaddressinformation.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_EXTENDEDADDRESSINFORMATION,
      params: { address }
    });
  }

  /**
   * Retrieve wallet information.
   * This method parses contract state and
   * currently supports more wallet types than getExtendedAddressInformation: simple wallet, standart wallet, v3 wallet, v4 wallet.
   *
   * @param address The address of the account.
   * @public
   */
  async getWalletInformation(
    address: TonfuraSDK.Core.GetWalletinformation.Params['address']
  ) {
    return httpClient.post<
      TonfuraSDK.Core.GetWalletinformation.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetWalletinformation.Response>,
        TonfuraSDK.Core.GetWalletinformation.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetWalletinformation.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_WALLET_INFORMATION,
      params: { address }
    });
  }

  /**
   * Get balance (in nanotons) of a given address.
   *
   * @param address The address of the account.
   * @public
   */
  async getAddressBalance(
    address: TonfuraSDK.Core.GetAddressbalance.Params['address']
  ) {
    return httpClient.post<
      TonfuraSDK.Core.GetAddressbalance.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetAddressbalance.Response>,
        TonfuraSDK.Core.GetAddressbalance.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetAddressbalance.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_ADDRESS_BALANCE,
      params: { address }
    });
  }

  /**
   * Get state of a given address. State can be either unitialized, active or frozen.
   *
   * @param address The address of the account.
   * @public
   */
  async getAddressState(
    address: TonfuraSDK.Core.GetAddressstate.Params['address']
  ) {
    return httpClient.post<
      TonfuraSDK.Core.GetAddressstate.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetAddressstate.Response>,
        TonfuraSDK.Core.GetAddressstate.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetAddressstate.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_ADDRESSSTATE,
      params: { address }
    });
  }

  /**
   * Convert an address from raw to human-readable format.
   *
   * @param address The address of the account.
   * @public
   */
  async packAddress(address: TonfuraSDK.Core.PackAddress.Params['address']) {
    return httpClient.post<
      TonfuraSDK.Core.PackAddress.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.PackAddress.Response>,
        TonfuraSDK.Core.PackAddress.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.PackAddress.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_PACK_ADDRESS,
      params: { address }
    });
  }

  /**
   * Convert an address from human-readable to raw format.
   *
   * @param address The address of the account.
   * @public
   */
  async unpackAddress(
    address: TonfuraSDK.Core.UnpackAddress.Params['address']
  ) {
    return httpClient.post<
      TonfuraSDK.Core.UnpackAddress.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.UnpackAddress.Response>,
        TonfuraSDK.Core.UnpackAddress.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.UnpackAddress.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_UNPACK_ADDRESS,
      params: { address }
    });
  }

  /**
   * Get all possible address forms.
   *
   * @param address The address of the account.
   * @public
   */
  async detectAddress(
    address: TonfuraSDK.Core.DetectAddress.Params['address']
  ) {
    return httpClient.post<
      TonfuraSDK.Core.DetectAddress.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.DetectAddress.Response>,
        TonfuraSDK.Core.DetectAddress.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.DetectAddress.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_DETECT_ADDRESS,
      params: { address }
    });
  }

  /**
   * Get NFT or Jetton information.
   *
   * @param address The address of the account.
   * @public
   */
  async getTokenData(address: TonfuraSDK.Core.GetTokenData.Params['address']) {
    return httpClient.post<
      TonfuraSDK.Core.GetTokenData.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetTokenData.Response>,
        TonfuraSDK.Core.GetTokenData.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetTokenData.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_TOKEN_DATA,
      params: { address }
    });
  }

  /**
   * Get up-to-date masterchain state.
   *
   * @public
   */
  async getMasterchainInfo() {
    return httpClient.post<
      TonfuraSDK.Core.GetMasterchainInfo.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetMasterchainInfo.Response>,
        TonfuraSDK.Core.GetMasterchainInfo.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetMasterchainInfo.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_MASTERCHAININFO
    });
  }

  /**
   * Get up-to-date masterchain state.
   *
   * @param senqo The senqo of the master chain block signatures.
   * @public
   */
  async getMasterchainBlockSignatures(
    seqno: TonfuraSDK.Core.GetMasterchainBlockSignatures.Params['seqno']
  ) {
    return httpClient.post<
      TonfuraSDK.Core.GetMasterchainBlockSignatures.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetMasterchainBlockSignatures.Response>,
        TonfuraSDK.Core.GetMasterchainBlockSignatures.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetMasterchainBlockSignatures.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_MASTERCHAINBLOCKSIGNATURES,
      params: { seqno }
    });
  }

  /**
   * Get merkle proof of shardchain block.
   *
   * @param params The variable of the shardchain block.
   * @public
   */
  async getShardBlockProof(params: TonfuraSDK.Core.GetShardBlockProof.Params) {
    return httpClient.post<
      TonfuraSDK.Core.GetShardBlockProof.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetShardBlockProof.Response>,
        TonfuraSDK.Core.GetShardBlockProof.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetShardBlockProof.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_SHARDBLOCKPROOF,
      params
    });
  }

  /**
   * Get consensus block and its update timestamp.
   *
   * @public
   */
  async getConsensusBlock() {
    return httpClient.post<
      TonfuraSDK.Core.GetConsensusBlock.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetConsensusBlock.Response>,
        TonfuraSDK.Core.GetConsensusBlock.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetConsensusBlock.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_CONSENSUSBLOCK
    });
  }

  /**
   * Look up block by either seqno, lt or unixtime.
   *
   * @param params The variable of the block.
   * @public
   */
  async lookupBlock(params: TonfuraSDK.Core.LookupBlock.Params) {
    return httpClient.post<
      TonfuraSDK.Core.LookupBlock.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.LookupBlock.Response>,
        TonfuraSDK.Core.LookupBlock.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.LookupBlock.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_LOOKUP_BLOCK,
      params
    });
  }

  /**
   * Get shards information.
   *
   * @param senqo The senqo of the shards.
   * @public
   */
  async shards(seqno: TonfuraSDK.Core.Shards.Params['seqno']) {
    return httpClient.post<
      TonfuraSDK.Core.Shards.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.Shards.Response>,
        TonfuraSDK.Core.Shards.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.Shards.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_SHARDS,
      params: { seqno }
    });
  }

  /**
   * Get metadata of a given block.
   *
   * @param params The variable of the block.
   * @public
   */
  async getBlockHeader(params: TonfuraSDK.Core.GetBlockHeader.Params) {
    return httpClient.post<
      TonfuraSDK.Core.GetBlockHeader.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetBlockHeader.Response>,
        TonfuraSDK.Core.GetBlockHeader.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetBlockHeader.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_BLOCKHEADER,
      params
    });
  }

  /**
   * Get transaction history of a given address.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async getTransactions(params: TonfuraSDK.Core.GetTransactions.Params) {
    return httpClient.post<
      TonfuraSDK.Core.GetTransactions.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetTransactions.Response>,
        TonfuraSDK.Core.GetTransactions.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetTransactions.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_TRANSACTIONS,
      params
    });
  }

  /**
   * Get transactions of the given block.
   *
   * @param params The variable of the block.
   * @public
   */
  async getBlockTransactions(
    params: TonfuraSDK.Core.GetBlockTransactions.Params
  ) {
    return httpClient.post<
      TonfuraSDK.Core.GetBlockTransactions.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetBlockTransactions.Response>,
        TonfuraSDK.Core.GetBlockTransactions.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetBlockTransactions.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_BLOCKHEADER,
      params
    });
  }

  /**
   * Locate outcoming transaction of destination address by incoming message.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateTx(params: TonfuraSDK.Core.TryLocateTx.Params) {
    return httpClient.post<
      TonfuraSDK.Core.TryLocateTx.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.TryLocateTx.Response>,
        TonfuraSDK.Core.TryLocateTx.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.TryLocateTx.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_TRYLOCATETX,
      params
    });
  }

  /**
   * Locate outcoming transaction of destination address by incoming message
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateResultTx(params: TonfuraSDK.Core.TryLocateResultTx.Params) {
    return httpClient.post<
      TonfuraSDK.Core.TryLocateResultTx.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.TryLocateResultTx.Response>,
        TonfuraSDK.Core.TryLocateResultTx.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.TryLocateResultTx.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_TRYLOCATERESULTTX,
      params
    });
  }

  /**
   * Locate incoming transaction of source address by outcoming message.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateSourceTx(params: TonfuraSDK.Core.TryLocateSourceTx.Params) {
    return httpClient.post<
      TonfuraSDK.Core.TryLocateSourceTx.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.TryLocateSourceTx.Response>,
        TonfuraSDK.Core.TryLocateSourceTx.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.TryLocateSourceTx.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_TRYLOCATESOURCETX,
      params
    });
  }

  /**
   * Get config by id.
   *
   * @param params The variable of the config.
   * @public
   */
  async getConfigParam(params: TonfuraSDK.Core.GetConfigParam.Params) {
    return httpClient.post<
      TonfuraSDK.Core.GetConfigParam.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.GetConfigParam.Response>,
        TonfuraSDK.Core.GetConfigParam.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.GetConfigParam.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_GET_CONFIGPARAM,
      params
    });
  }

  /**
   * Run get method on smart contract.
   *
   * @param params The variable of the block.
   * @public
   */
  async runGetMethod(params: TonfuraSDK.Core.RunGetMethod.Params) {
    return httpClient.post<
      TonfuraSDK.Core.RunGetMethod.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.RunGetMethod.Response>,
        TonfuraSDK.Core.RunGetMethod.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.RunGetMethod.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_RUN_GET_METHOD,
      params
    });
  }

  /**
   * Estimate fees required for query processing. body, init-code and init-data accepted in serialized format (b64-encoded).
   *
   * @param params The variable of the block.
   * @public
   */
  async estimateFee(params: TonfuraSDK.Core.Estimatefee.Params) {
    return httpClient.post<
      TonfuraSDK.Core.Estimatefee.Params,
      AxiosResponse<
        JSONRPCResponse<TonfuraSDK.Core.Estimatefee.Response>,
        TonfuraSDK.Core.Estimatefee.Params
      >,
      JSONRPCRequest<TonfuraSDK.Core.Estimatefee.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_ESTIMATEFEE,
      params
    });
  }
}
