import {
  DEFAULT_MAX_RETRIES,
  DEFAULT_NETWORK,
  DEFAULT_TONFURA_API_KEY,
  Network
} from '../constants';
import { TonfuraSettings } from '../types/types';
import type { TonfuraProvider } from './TonfuraProvider';

/**
 * This class holds the config information for the SDK client instance and
 * exposes the underlying providers for more advanced use cases.
 *
 * @public
 */
export class TonfuraConfig {
  /** The Tonfura API key. */
  readonly apiKey: string;

  /** The Network that this SDK is associated with. */
  readonly network: Network;

  /** The maximum number of retries to perform. */
  readonly maxRetries: number;

  /**
   * The optional hardcoded URL to send requests to instead of using the network
   * and apiKey.
   */
  readonly url?: string;

  /**
   * Dynamically imported provider instance.
   *
   * @internal
   */
  private _baseTonfuraProvider: Promise<TonfuraProvider> | undefined;

  constructor(config?: TonfuraSettings) {
    this.apiKey = config?.apiKey || DEFAULT_TONFURA_API_KEY;
    this.network = config?.network || DEFAULT_NETWORK;
    this.maxRetries = config?.maxRetries || DEFAULT_MAX_RETRIES;
    this.url = config?.url;
  }

  /**
   * Returns an TonfuraProvider instance. Only one provider is created per
   * Tonfura instance.
   *
   * The TonfuraProvider is a wrapper around `axios` class and has been expanded
   * to support Tonfura's APIs.
   *
   * @public
   */
  getProvider(): Promise<TonfuraProvider> {
    if (!this._baseTonfuraProvider) {
      this._baseTonfuraProvider = (async () => {
        const { TonfuraProvider } = await import('./TonfuraProvider');
        return new TonfuraProvider(this);
      })();
    }
    return this._baseTonfuraProvider;
  }
}
