import { Method } from '../constants';
import { TonfuraConfig } from './TonfuraConfig';

/**
 * The Core contains all commonly-used methods.
 *
 * Do not call this constructor directly. Instead, instantiate an Tonfura object
 * with `const tonfura = new Tonfura(config)` and then access the Core via `tonfura.core`.
 */
export class Core {
  /** @internal */
  constructor(private readonly config: TonfuraConfig) {}

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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetAddressInformation.Params,
      TonfuraSDK.Core.GetAddressInformation.Response
    >(Method.TON_GET_ADDRESS_INFO, { address });
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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetExtendedaddressinformation.Params,
      TonfuraSDK.Core.GetExtendedaddressinformation.Response
    >(Method.TON_GET_EXTENDEDADDRESSINFORMATION, { address });
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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetWalletinformation.Params,
      TonfuraSDK.Core.GetWalletinformation.Response
    >(Method.TON_GET_WALLET_INFORMATION, { address });
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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetAddressbalance.Params,
      TonfuraSDK.Core.GetAddressbalance.Response
    >(Method.TON_GET_ADDRESS_BALANCE, { address });
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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetAddressstate.Params,
      TonfuraSDK.Core.GetAddressstate.Response
    >(Method.TON_GET_ADDRESSSTATE, { address });
  }

  /**
   * Convert an address from raw to human-readable format.
   *
   * @param address The address of the account.
   * @public
   */
  async packAddress(address: TonfuraSDK.Core.PackAddress.Params['address']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.PackAddress.Params,
      TonfuraSDK.Core.PackAddress.Response
    >(Method.TON_PACK_ADDRESS, { address });
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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.UnpackAddress.Params,
      TonfuraSDK.Core.UnpackAddress.Response
    >(Method.TON_UNPACK_ADDRESS, { address });
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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.DetectAddress.Params,
      TonfuraSDK.Core.DetectAddress.Response
    >(Method.TON_DETECT_ADDRESS, { address });
  }

  /**
   * Get NFT or Jetton information.
   *
   * @param address The address of the account.
   * @public
   */
  async getTokenData(address: TonfuraSDK.Core.GetTokenData.Params['address']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetTokenData.Params,
      TonfuraSDK.Core.GetTokenData.Response
    >(Method.TON_GET_TOKEN_DATA, { address });
  }

  /**
   * Get up-to-date masterchain state.
   *
   * @public
   */
  async getMasterchainInfo() {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetMasterchainInfo.Params,
      TonfuraSDK.Core.GetMasterchainInfo.Response
    >(Method.TON_GET_MASTERCHAININFO);
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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetMasterchainBlockSignatures.Params,
      TonfuraSDK.Core.GetMasterchainBlockSignatures.Response
    >(Method.TON_GET_MASTERCHAINBLOCKSIGNATURES, { seqno });
  }

  /**
   * Get merkle proof of shardchain block.
   *
   * @param params The variable of the shardchain block.
   * @public
   */
  async getShardBlockProof(params: TonfuraSDK.Core.GetShardBlockProof.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetShardBlockProof.Params,
      TonfuraSDK.Core.GetShardBlockProof.Response
    >(Method.TON_GET_SHARDBLOCKPROOF, params);
  }

  /**
   * Get consensus block and its update timestamp.
   *
   * @public
   */
  async getConsensusBlock() {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetConsensusBlock.Params,
      TonfuraSDK.Core.GetConsensusBlock.Response
    >(Method.TON_GET_CONSENSUSBLOCK);
  }

  /**
   * Look up block by either seqno, lt or unixtime.
   *
   * @param params The variable of the block.
   * @public
   */
  async lookupBlock(params: TonfuraSDK.Core.LookupBlock.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.LookupBlock.Params,
      TonfuraSDK.Core.LookupBlock.Response
    >(Method.TON_LOOKUP_BLOCK, params);
  }

  /**
   * Get shards information.
   *
   * @param senqo The senqo of the shards.
   * @public
   */
  async shards(seqno: TonfuraSDK.Core.Shards.Params['seqno']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.Shards.Params,
      TonfuraSDK.Core.Shards.Response
    >(Method.TON_SHARDS, { seqno });
  }

  /**
   * Get metadata of a given block.
   *
   * @param params The variable of the block.
   * @public
   */
  async getBlockHeader(params: TonfuraSDK.Core.GetBlockHeader.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetBlockHeader.Params,
      TonfuraSDK.Core.GetBlockHeader.Response
    >(Method.TON_GET_BLOCKHEADER, params);
  }

  /**
   * Get transaction history of a given address.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async getTransactions(params: TonfuraSDK.Core.GetTransactions.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetTransactions.Params,
      TonfuraSDK.Core.GetTransactions.Response
    >(Method.TON_GET_TRANSACTIONS, params);
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
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetBlockTransactions.Params,
      TonfuraSDK.Core.GetBlockTransactions.Response
    >(Method.TON_GET_BLOCK_TRANSACTIONS, params);
  }

  /**
   * Locate outcoming transaction of destination address by incoming message.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateTx(params: TonfuraSDK.Core.TryLocateTx.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.TryLocateTx.Params,
      TonfuraSDK.Core.TryLocateTx.Response
    >(Method.TON_TRYLOCATETX, params);
  }

  /**
   * Locate outcoming transaction of destination address by incoming message
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateResultTx(params: TonfuraSDK.Core.TryLocateResultTx.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.TryLocateResultTx.Params,
      TonfuraSDK.Core.TryLocateResultTx.Response
    >(Method.TON_TRYLOCATERESULTTX, params);
  }

  /**
   * Locate incoming transaction of source address by outcoming message.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateSourceTx(params: TonfuraSDK.Core.TryLocateSourceTx.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.TryLocateSourceTx.Params,
      TonfuraSDK.Core.TryLocateSourceTx.Response
    >(Method.TON_TRYLOCATESOURCETX, params);
  }

  /**
   * Get config by id.
   *
   * @param params The variable of the config.
   * @public
   */
  async getConfigParam(params: TonfuraSDK.Core.GetConfigParam.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.GetConfigParam.Params,
      TonfuraSDK.Core.GetConfigParam.Response
    >(Method.TON_GET_CONFIGPARAM, params);
  }

  /**
   * Run get method on smart contract.
   *
   * @param params The variable of the block.
   * @public
   */
  async runGetMethod(params: TonfuraSDK.Core.RunGetMethod.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.RunGetMethod.Params,
      TonfuraSDK.Core.RunGetMethod.Response
    >(Method.TON_RUN_GET_METHOD, params);
  }

  /**
   * Estimate fees required for query processing. body, init-code and init-data accepted in serialized format (b64-encoded).
   *
   * @param params The variable of the block.
   * @public
   */
  async estimateFee(params: TonfuraSDK.Core.Estimatefee.Params) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Core.Estimatefee.Params,
      TonfuraSDK.Core.Estimatefee.Response
    >(Method.TON_ESTIMATEFEE, params);
  }
}
