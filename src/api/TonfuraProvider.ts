import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { MethodV1, Version } from '../constants';
import { JsonRpcRequest, JsonRpcResponse } from '../types/json-rpc-types';
import { version as sdkVersion } from '../../package.json';
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
  #httpClient: AxiosInstance;

  /** @internal */
  constructor(config: TonfuraConfig) {
    this.apiKey = config.apiKey;

    const network = config.network;

    this.baseUrl = config.url || `https://${network}-rpc.tonfura.com`;

    this.maxRetries = config.maxRetries;

    this.#httpClient = axios.create({
      headers: {
        'x-sdk-version': sdkVersion,
        'x-source': 'tonfura-sdk'
      }
    });
  }

  /** @internal */
  sendJsonRpcRequest<JsonRpcRequestParams, JsonRpcResponseResult>(
    {
      method,
      params,
      version = 'v1'
    }: {
      method: MethodV1;
      params?: JsonRpcRequestParams;
      version?: Version;
    },
    options?: AxiosRequestConfig<JsonRpcRequest<JsonRpcRequestParams>>
  ): Promise<AxiosResponse<JsonRpcResponse<JsonRpcResponseResult>>> {
    const url = `${this.baseUrl}/${version}/json-rpc/${this.apiKey}`;
    return this.#httpClient.post<
      JsonRpcResponse<JsonRpcResponseResult>,
      AxiosResponse<JsonRpcResponse<JsonRpcResponseResult>>,
      JsonRpcRequest<JsonRpcRequestParams>
    >(
      url,
      {
        jsonrpc: '2.0',
        id: 0,
        method,
        params
      },
      options
    );
  }
}
