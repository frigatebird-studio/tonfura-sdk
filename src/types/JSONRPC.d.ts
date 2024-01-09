declare namespace JSONRPC {
  type JSONRPC = '2.0';
  type JSONRPCID = string | number | null;
  type JSONRPCParams<T = any> = T;

  interface JSONRPCError {
    code: number;
    message: string;
    data?: any;
  }

  interface JSONRPCRequest<TParams = any> {
    jsonrpc: JSONRPC;
    method: string;
    params?: JSONRPCParams<TParams>;
    id?: JSONRPCID;
  }

  interface JSONRPCSuccessResponse<TResult> {
    jsonrpc: JSONRPC;
    id: JSONRPCID;
    result: TResult;
    error?: undefined;
  }

  interface JSONRPCErrorResponse {
    jsonrpc: JSONRPC;
    id: JSONRPCID;
    result?: undefined;
    error: JSONRPCError;
  }

  type JSONRPCResponse<TResponse = any> =
    | JSONRPCSuccessResponse<TResponse>
    | JSONRPCErrorResponse;
}
