export type JSONRPC = '2.0';
export const JSONRPC: JSONRPC = '2.0';
export type JSONRPCID = string | number | null;
export type JSONRPCParams<T = any> = T;

export interface JSONRPCError {
  code: number;
  message: string;
  data?: any;
}

export interface JSONRPCRequest<TParams = any> {
  jsonrpc: JSONRPC;
  method: string;
  params?: JSONRPCParams<TParams>;
  id?: JSONRPCID;
}

export type JSONRPCResponse<TResponse = any> =
  | JSONRPCSuccessResponse<TResponse>
  | JSONRPCErrorResponse;

export interface JSONRPCSuccessResponse<TResult> {
  jsonrpc: JSONRPC;
  id: JSONRPCID;
  result: TResult;
  error?: undefined;
}

export interface JSONRPCErrorResponse {
  jsonrpc: JSONRPC;
  id: JSONRPCID;
  result?: undefined;
  error: JSONRPCError;
}
