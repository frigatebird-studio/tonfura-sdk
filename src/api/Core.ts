import { Method } from '../constants';
import * as TonTypes from '../types/ton-types';
import { TonfuraConfig } from './TonfuraConfig';

/**
 * The Core contains all commonly-used ton's methods.
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
    address: TonTypes.GetAddressInformationParams['address']
  ) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetAddressInformationParams,
      TonTypes.GetAddressInformationResult
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
    address: TonTypes.GetExtendedaddressinformationParams['address']
  ) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetExtendedaddressinformationParams,
      TonTypes.GetExtendedaddressinformationResult
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
    address: TonTypes.GetWalletinformationParams['address']
  ) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetWalletinformationParams,
      TonTypes.GetWalletinformationResult
    >(Method.TON_GET_WALLET_INFORMATION, { address });
  }

  /**
   * Get balance (in nanotons) of a given address.
   *
   * @param address The address of the account.
   * @public
   */
  async getAddressBalance(
    address: TonTypes.GetAddressbalanceParams['address']
  ) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetAddressbalanceParams,
      TonTypes.GetAddressbalanceResult
    >(Method.TON_GET_ADDRESS_BALANCE, { address });
  }

  /**
   * Get state of a given address. State can be either unitialized, active or frozen.
   *
   * @param address The address of the account.
   * @public
   */
  async getAddressState(address: TonTypes.GetAddressstateParams['address']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetAddressstateParams,
      TonTypes.GetAddressstateResult
    >(Method.TON_GET_ADDRESSSTATE, { address });
  }

  /**
   * Convert an address from raw to human-readable format.
   *
   * @param address The address of the account.
   * @public
   */
  async packAddress(address: TonTypes.PackAddressParams['address']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.PackAddressParams,
      TonTypes.PackAddressResult
    >(Method.TON_PACK_ADDRESS, { address });
  }

  /**
   * Convert an address from human-readable to raw format.
   *
   * @param address The address of the account.
   * @public
   */
  async unpackAddress(address: TonTypes.UnpackAddressParams['address']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.UnpackAddressParams,
      TonTypes.UnpackAddressResult
    >(Method.TON_UNPACK_ADDRESS, { address });
  }

  /**
   * Get all possible address forms.
   *
   * @param address The address of the account.
   * @public
   */
  async detectAddress(address: TonTypes.DetectAddressParams['address']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.DetectAddressParams,
      TonTypes.DetectAddressResult
    >(Method.TON_DETECT_ADDRESS, { address });
  }

  /**
   * Get NFT or Jetton information.
   *
   * @param address The address of the account.
   * @public
   */
  async getTokenData(address: TonTypes.GetTokenDataParams['address']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetTokenDataParams,
      TonTypes.GetTokenDataResult
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
      TonTypes.GetMasterchainInfoParams,
      TonTypes.GetMasterchainInfoResult
    >(Method.TON_GET_MASTERCHAININFO);
  }

  /**
   * Get up-to-date masterchain state.
   *
   * @param senqo The senqo of the master chain block signatures.
   * @public
   */
  async getMasterchainBlockSignatures(
    seqno: TonTypes.GetMasterchainBlockSignaturesParams['seqno']
  ) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetMasterchainBlockSignaturesParams,
      TonTypes.GetMasterchainBlockSignaturesResult
    >(Method.TON_GET_MASTERCHAINBLOCKSIGNATURES, { seqno });
  }

  /**
   * Get merkle proof of shardchain block.
   *
   * @param params The variable of the shardchain block.
   * @public
   */
  async getShardBlockProof(params: TonTypes.GetShardBlockProofParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetShardBlockProofParams,
      TonTypes.GetShardBlockProofResult
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
      TonTypes.GetConsensusBlockParams,
      TonTypes.GetConsensusBlockResult
    >(Method.TON_GET_CONSENSUSBLOCK);
  }

  /**
   * Look up block by either seqno, lt or unixtime.
   *
   * @param params The variable of the block.
   * @public
   */
  async lookupBlock(params: TonTypes.LookupBlockParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.LookupBlockParams,
      TonTypes.LookupBlockResult
    >(Method.TON_LOOKUP_BLOCK, params);
  }

  /**
   * Get shards information.
   *
   * @param senqo The senqo of the shards.
   * @public
   */
  async shards(seqno: TonTypes.ShardsParams['seqno']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.ShardsParams,
      TonTypes.ShardsResult
    >(Method.TON_SHARDS, { seqno });
  }

  /**
   * Get metadata of a given block.
   *
   * @param params The variable of the block.
   * @public
   */
  async getBlockHeader(params: TonTypes.GetBlockHeaderParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetBlockHeaderParams,
      TonTypes.GetBlockHeaderResult
    >(Method.TON_GET_BLOCKHEADER, params);
  }

  /**
   * Get transaction history of a given address.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async getTransactions(params: TonTypes.GetTransactionsParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetTransactionsParams,
      TonTypes.GetTransactionsResult
    >(Method.TON_GET_TRANSACTIONS, params);
  }

  /**
   * Get transactions of the given block.
   *
   * @param params The variable of the block.
   * @public
   */
  async getBlockTransactions(params: TonTypes.GetBlockTransactionsParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetBlockTransactionsParams,
      TonTypes.GetBlockTransactionsResult
    >(Method.TON_GET_BLOCK_TRANSACTIONS, params);
  }

  /**
   * Locate outcoming transaction of destination address by incoming message.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateTx(params: TonTypes.TryLocateTxParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.TryLocateTxParams,
      TonTypes.TryLocateTxResult
    >(Method.TON_TRYLOCATETX, params);
  }

  /**
   * Locate outcoming transaction of destination address by incoming message
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateResultTx(params: TonTypes.TryLocateResultTxParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.TryLocateResultTxParams,
      TonTypes.TryLocateResultTxResult
    >(Method.TON_TRYLOCATERESULTTX, params);
  }

  /**
   * Locate incoming transaction of source address by outcoming message.
   *
   * @param params The variable of the transactions.
   * @public
   */
  async tryLocateSourceTx(params: TonTypes.TryLocateSourceTxParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.TryLocateSourceTxParams,
      TonTypes.TryLocateSourceTxResult
    >(Method.TON_TRYLOCATESOURCETX, params);
  }

  /**
   * Get config by id.
   *
   * @param params The variable of the config.
   * @public
   */
  async getConfigParam(params: TonTypes.GetConfigParamParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.GetConfigParamParams,
      TonTypes.GetConfigParamResult
    >(Method.TON_GET_CONFIGPARAM, params);
  }

  /**
   * Run get method on smart contract.
   *
   * @param params The variable of the block.
   * @public
   */
  async runGetMethod(params: TonTypes.RunGetMethodParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.RunGetMethodParams,
      TonTypes.RunGetMethodResult
    >(Method.TON_RUN_GET_METHOD, params);
  }

  /**
   * Estimate fees required for query processing. body, init-code and init-data accepted in serialized format (b64-encoded).
   *
   * @param params The variable of the block.
   * @public
   */
  async estimateFee(params: TonTypes.EstimatefeeParams) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.EstimatefeeParams,
      TonTypes.EstimatefeeResult
    >(Method.TON_ESTIMATEFEE, params);
  }
}
