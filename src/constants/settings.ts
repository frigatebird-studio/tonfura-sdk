export enum Network {
  Mainnet = 'mainnet',
  Testnet = 'testnet'
}

export const TONFURA_API_BASE_URL =
  'https://tonfura-api-production.fdc.ai/v1/json-rpc';

export const DEFAULT_TONFURA_ID = 1;
export const DEFAULT_TONFURA_API_KEY = 'DEFAULT_API_KEY';
export const DEFAULT_NETWORK = Network.Mainnet;
export const DEFAULT_MAX_RETRIES = 5;
