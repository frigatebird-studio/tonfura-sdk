export enum Network {
  Mainnet = 'mainnet',
  Testnet = 'testnet'
}

export const DEFAULT_TONFURA_API_KEY = 'DEFAULT_API_KEY';
export const DEFAULT_NETWORK = Network.Mainnet;
export const DEFAULT_MAX_RETRIES = 5;

/**
 * Returns the base URL for making Tonfura API requests.
 *
 * @internal
 */
export function getTonfuraHttpUrl(_network: Network, apiKey: string): string {
  return `https://api.tonfura.com/v1/json-rpc/${apiKey}`;
}
