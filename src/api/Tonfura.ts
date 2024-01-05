import { httpClient } from '../utils';
import { Core } from './Core';
import { TonfuraConfig } from './TonfuraConfig';
import { Transact } from './Transact';

/**
 * The Tonfura SDK client. This class is the main entry point into Tonfura's
 * APIs and separates functionality into different namespaces.
 *
 * Each SDK instance is associated with a specific network and API key. To use a
 * different network or API key, create a new instance of {@link Tonfura}.
 *
 * @public
 */
export class Tonfura {
  /**
   * The `core` Tonfura's enhanced APIs.
   */
  readonly core: Core;

  /**
   * The `transact` contains methods for sending transactions and
   * checking on the state of submitted transasctions.
   */
  readonly transact: Transact;

  /**
   * Holds the setting information for the instance of the Tonfura SDK client
   * and allows access to the underlying providers.
   */
  readonly config: TonfuraConfig;

  /**
   * @param {string} [settings.id] - The id to use for Tonfura
   * @param {string} [settings.apiKey] - The API key to use for Tonfura
   * @param {Network} [settings.network] - The network to use for Tonfura
   * @param {url} [settings.url] - Optional URL endpoint to use for all requests.
   * @param {number} [settings.maxRetries] - The maximum number of retries to attempt
   * @param {number} [settings.requestTimeout] - The timeout after which request should fail
   * @public
   */
  constructor(settings?: TonfuraSDK.Settings) {
    this.config = new TonfuraConfig(settings);

    if (settings?.url) {
      httpClient.defaults.baseURL = settings.url;
    }

    this.core = new Core(this.config);
    this.transact = new Transact(this.config);
  }
}
