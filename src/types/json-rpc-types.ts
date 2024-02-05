type JsonRpcId = string | number | null;

export interface JsonRpcRequest<T> {
  jsonrpc: '2.0';
  method: string;
  params?: T;
  id?: JsonRpcId;
}

export interface JsonRpcSuccessResponse<T> {
  jsonrpc: '2.0';
  id: JsonRpcId;
  result: T;
  error?: undefined;
}

export interface JsonRpcErrorResponse {
  jsonrpc: '2.0';
  id: JsonRpcId;
  result?: undefined;
  error: JsonRpcError;
}

interface JsonRpcError {
  code: number;
  message: string;
  data?: any;
}

export type JsonRpcResponse<T> =
  | JsonRpcSuccessResponse<T>
  | JsonRpcErrorResponse;
