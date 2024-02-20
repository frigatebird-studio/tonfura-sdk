import axios, { AxiosResponse } from 'axios';

import { Method, getTonfuraHttpUrl } from '../constants';
import { JsonRpcRequest, JsonRpcResponse } from '../types/json-rpc-types';
import { TonfuraConfig } from './TonfuraConfig';

/**
 * SDK's custom implementation of 'TonfuraProvider'.
 *
 * Do not call this constructor directly. Instead, instantiate an instance of
 * {@link Tonfura} and call {@link Tonfura.config.getProvider()}.
 *
 * @public
 */
export class TonfuraProvider {
  readonly baseUrl: string;
  readonly maxRetries: number;

  /** @internal */
  constructor(config: TonfuraConfig) {
    const apiKey = config.apiKey;

    const network = config.network;

    this.baseUrl = getTonfuraHttpUrl(network, apiKey);

    if (config.url !== undefined) {
      this.baseUrl = config.url;
    }

    this.maxRetries = config.maxRetries;
  }

  /** @internal */
  sendJsonRpcRequest<JsonRpcRequestParams, JsonRpcResponseResult>(
    method: Method,
    params?: JsonRpcRequestParams
  ): Promise<AxiosResponse<JsonRpcResponse<JsonRpcResponseResult>>> {
    return axios.post<
      JsonRpcResponse<JsonRpcResponseResult>,
      AxiosResponse<JsonRpcResponse<JsonRpcResponseResult>>,
      JsonRpcRequest<JsonRpcRequestParams>
    >(this.baseUrl, {
      jsonrpc: '2.0',
      id: 0,
      method,
      params
    });
  }
}
