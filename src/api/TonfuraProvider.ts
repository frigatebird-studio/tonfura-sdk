import axios, { AxiosResponse } from 'axios';

import { MethodV1, MethodV2, Version } from '../constants';
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
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly maxRetries: number;

  /** @internal */
  constructor(config: TonfuraConfig) {
    this.apiKey = config.apiKey;

    const network = config.network;

    this.baseUrl = config.url || `https://${network}-rpc.tonfura.com`;

    this.maxRetries = config.maxRetries;
  }

  /** @internal */
  sendJsonRpcRequest<JsonRpcRequestParams, JsonRpcResponseResult>(
    method: MethodV1 | MethodV2,
    params?: JsonRpcRequestParams,
    version: Version = 'v1'
  ): Promise<AxiosResponse<JsonRpcResponse<JsonRpcResponseResult>>> {
    const url = `${this.baseUrl}/${version}/json-rpc/${this.apiKey}`;
    return axios.post<
      JsonRpcResponse<JsonRpcResponseResult>,
      AxiosResponse<JsonRpcResponse<JsonRpcResponseResult>>,
      JsonRpcRequest<JsonRpcRequestParams>
    >(url, {
      jsonrpc: '2.0',
      id: 0,
      method,
      params
    });
  }
}
