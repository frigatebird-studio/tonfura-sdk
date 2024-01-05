import { DEFAULT_TONFURA_API_KEY } from '../constants';
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
  readonly maxRetries: number;

  /** @internal */
  constructor(config: TonfuraConfig) {
    this.apiKey = config.apiKey;
    this.maxRetries = config.maxRetries;
    // TODO: support individual headers when calling batch
  }

  /**
   * Returns the API key for an Tonfura provider.
   *
   * @internal
   * @override
   */
  static getApiKey(apiKey: any): string {
    if (apiKey === null) {
      return DEFAULT_TONFURA_API_KEY;
    }
    if (apiKey && typeof apiKey !== 'string') {
      throw new Error(
        `Invalid apiKey '${apiKey}' provided. apiKey must be a string.`
      );
    }
    return apiKey;
  }
}
