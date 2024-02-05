import { Method } from '../constants';
import { TonfuraConfig } from './TonfuraConfig';

/**
 * The Transact contains methods used for sending transactions and
 * checking on the state of submitted transactions.
 *
 * Do not call this constructor directly. Instead, instantiate an Tonfura object
 * with `const tonfura = new Tonfura(config)` and then access the transact via `tonfura.transact`.
 */
export class Transact {
  /** @internal */
  constructor(private readonly config: TonfuraConfig) {}

  /**
   * Send serialized boc file: fully packed and serialized external message to blockchain.
   *
   * @param boc
   * @public
   */
  async sendBoc(boc: TonfuraSDK.Transact.SendBoc.Params['boc']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Transact.SendBoc.Params,
      TonfuraSDK.Transact.SendBoc.Response
    >(Method.TON_SEND_BOC, { boc });
  }

  /**
   * Send serialized boc file: fully packed and serialized external message to blockchain. The method returns message hash.
   *
   * @param boc
   * @public
   */
  async sendBocReturnHash(
    boc: TonfuraSDK.Transact.SendBocReturnHash.Params['boc']
  ) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonfuraSDK.Transact.SendBocReturnHash.Params,
      TonfuraSDK.Transact.SendBocReturnHash.Response
    >(Method.TON_SEND_BOC_RETURN_HASH, { boc });
  }

  // TODO: Implement sendQuery
}
