import { AxiosResponse } from 'axios';

import { JSON_RPC_VERSION, Method } from '../constants';
import { httpClient } from '../utils';
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
  private commonParams;
  constructor(private readonly config: TonfuraConfig) {
    this.commonParams = {
      jsonrpc: JSON_RPC_VERSION,
      id: this.config.id
    };
  }

  /**
   * Send serialized boc file: fully packed and serialized external message to blockchain.
   *
   * @param boc
   * @public
   */
  async sendBoc(boc: TonfuraSDK.Transact.SendBoc.Params['boc']) {
    return httpClient.post<
      TonfuraSDK.Transact.SendBoc.Params,
      AxiosResponse<
        TonfuraSDK.Transact.SendBoc.Response,
        TonfuraSDK.Transact.SendBoc.Params
      >,
      TonfuraSDK.Transact.Payload<TonfuraSDK.Transact.SendBoc.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_SEND_BOC,
      params: { boc }
    });
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
    return httpClient.post<
      TonfuraSDK.Transact.SendBocReturnHash.Params,
      AxiosResponse<
        TonfuraSDK.Transact.SendBocReturnHash.Response,
        TonfuraSDK.Transact.SendBocReturnHash.Params
      >,
      TonfuraSDK.Transact.Payload<TonfuraSDK.Transact.SendBocReturnHash.Params>
    >(this.config.apiKey, {
      ...this.commonParams,
      method: Method.TON_SEND_BOC_RETURN_HASH,
      params: { boc }
    });
  }

  /**
   * Send query - unpacked external message.
   * This method takes address, body and init-params (if any),
   * packs it to external message and sends to network.
   * All params should be boc-serialized.
   *
   * @param params The variable of the query.
   * @public
   */
  // async sendQuery(params: TonfuraSDK.Transact.SendQuery.Params) {
  //   return httpClient.post<
  //     TonfuraSDK.Transact.SendQuery.Params,
  //     AxiosResponse<
  //       TonfuraSDK.Transact.SendQuery.Response,
  //       TonfuraSDK.Transact.SendQuery.Params
  //     >,
  //     TonfuraSDK.Transact.Payload<TonfuraSDK.Transact.SendQuery.Params>
  //   >(this.config.apiKey, {
  //     ...this.commonParams,
  //     method: Method.TON_SEND_QUERY,
  //     params
  //   });
  // }
}
