import { MethodV1 } from '../constants';
import * as TonTypes from '../types/ton-types';
import { TonfuraConfig } from './TonfuraConfig';

/**
 * The Transact contains methods used for sending transactions and checking on
 * the state of submitted transactions.
 *
 * Do not call this constructor directly. Instead, instantiate an Tonfura object
 * with `const tonfura = new Tonfura(config)` and then access the transact via
 * `tonfura.transact`.
 */
export class Transact {
  /** @internal */
  constructor(private readonly config: TonfuraConfig) {}

  /**
   * Send serialized boc file: fully packed and serialized external message to
   * blockchain.
   *
   * @param boc
   * @public
   */
  async sendBoc(boc: TonTypes.SendBocParams['boc']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.SendBocParams,
      TonTypes.SendBocResult
    >(MethodV1.TON_SEND_BOC, { boc });
  }

  /**
   * Send serialized boc file: fully packed and serialized external message to
   * blockchain. The method returns message hash.
   *
   * @param boc
   * @public
   */
  async sendBocReturnHash(boc: TonTypes.SendBocReturnHashParams['boc']) {
    const provider = await this.config.getProvider();
    return provider.sendJsonRpcRequest<
      TonTypes.SendBocReturnHashParams,
      TonTypes.SendBocReturnHashResult
    >(MethodV1.TON_SEND_BOC_RETURN_HASH, { boc });
  }

  // TODO: Implement sendQuery
}
