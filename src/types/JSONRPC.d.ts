declare namespace JSONRPC {
  type VERSION = '2.0';
  type ID = string | number | null;

  interface Error {
    code: number;
    message: string;
    data?: any;
  }

  interface Request<TParams extends TonfuraSDK.Params> {
    jsonrpc: VERSION;
    method: string;
    params?: TParams;
    id?: ID;
  }

  interface SuccessResponse<TResult> {
    jsonrpc: VERSION;
    id: ID;
    result: TResult;
    error?: undefined;
  }

  interface ErrorResponse {
    jsonrpc: VERSION;
    id: ID;
    result?: undefined;
    error: Error;
  }

  type Response<TResponse extends TonfuraSDK.Response> =
    | SuccessResponse<TResponse>
    | ErrorResponse;
}
