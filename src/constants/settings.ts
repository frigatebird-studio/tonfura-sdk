export enum Network {
  Mainnet = 'mainnet',
  Testnet = 'testnet'
}

export type Version = 'v1' | 'v2';

export const DEFAULT_TONFURA_API_KEY = 'DEFAULT_API_KEY';
export const DEFAULT_NETWORK = Network.Mainnet;
export const DEFAULT_MAX_RETRIES = 5;
