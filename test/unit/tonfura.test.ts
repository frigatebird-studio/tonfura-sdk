import { Tonfura } from '../../src';
import {
  DEFAULT_MAX_RETRIES,
  DEFAULT_NETWORK,
  DEFAULT_TONFURA_API_KEY,
  Network
} from '../../src/constants';

describe('Tonfura class', () => {
  it('initializes to default values', () => {
    const tonfura = new Tonfura();
    expect(tonfura.config.apiKey).toBe(DEFAULT_TONFURA_API_KEY);
    expect(tonfura.config.network).toBe(DEFAULT_NETWORK);
    expect(tonfura.config.maxRetries).toBe(DEFAULT_MAX_RETRIES);
    expect(tonfura.config.url).toBeUndefined();
  });

  it('initializes to given values', async () => {
    const settings = {
      apiKey: 'apiKey',
      network: Network.Mainnet,
      maxRetries: 56,
      url: 'develop.api.com',
      id: 78
    };

    const tonfura = new Tonfura(settings);
    expect(tonfura.config.apiKey).toBe(settings.apiKey);
    expect(tonfura.config.network).toBe(settings.network);
    expect(tonfura.config.maxRetries).toBe(settings.maxRetries);
    expect(tonfura.config.url).toBe(settings.url);

    const provider = await tonfura.config.getProvider();
    expect(provider.baseUrl).toBe(settings.url);
  });

  it('reuses the same provider', async () => {
    const tonfura = new Tonfura();
    const provider = await tonfura.config.getProvider();
    const provider2 = await tonfura.config.getProvider();
    expect(provider).toBe(provider2);
  });

  it('providers are loaded once', async () => {
    const tonfura = new Tonfura();
    const providerPromise = tonfura.config.getProvider();
    const provider2Promise = tonfura.config.getProvider();
    const provider = await providerPromise;
    const provider2 = await provider2Promise;
    expect(provider).toBe(provider2);
  });
});
