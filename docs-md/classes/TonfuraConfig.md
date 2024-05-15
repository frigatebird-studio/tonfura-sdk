[**tonfura-sdk**](../README.md) • **Docs**

***

[tonfura-sdk](../globals.md) / TonfuraConfig

# Class: TonfuraConfig

This class holds the config information for the SDK client instance and
exposes the underlying providers for more advanced use cases.

## Constructors

### new TonfuraConfig()

> **new TonfuraConfig**(`config`?): [`TonfuraConfig`](TonfuraConfig.md)

#### Parameters

• **config?**: `TonfuraSettings`

#### Returns

[`TonfuraConfig`](TonfuraConfig.md)

#### Source

[api/TonfuraConfig.ts:39](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/TonfuraConfig.ts#L39)

## Properties

### apiKey

> `readonly` **apiKey**: `string`

The Tonfura API key.

#### Source

[api/TonfuraConfig.ts:18](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/TonfuraConfig.ts#L18)

***

### maxRetries

> `readonly` **maxRetries**: `number`

The maximum number of retries to perform.

#### Source

[api/TonfuraConfig.ts:24](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/TonfuraConfig.ts#L24)

***

### network

> `readonly` **network**: [`Network`](../enumerations/Network.md)

The Network that this SDK is associated with.

#### Source

[api/TonfuraConfig.ts:21](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/TonfuraConfig.ts#L21)

***

### url?

> `optional` `readonly` **url**: `string`

The optional hardcoded URL to send requests to instead of using the network
and apiKey.

#### Source

[api/TonfuraConfig.ts:30](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/TonfuraConfig.ts#L30)

## Methods

### getProvider()

> **getProvider**(): `Promise`\<[`TonfuraProvider`](TonfuraProvider.md)\>

Returns an TonfuraProvider instance. Only one provider is created per
Tonfura instance.

The TonfuraProvider is a wrapper around `axios` class and has been expanded
to support Tonfura's APIs.

#### Returns

`Promise`\<[`TonfuraProvider`](TonfuraProvider.md)\>

#### Source

[api/TonfuraConfig.ts:55](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/TonfuraConfig.ts#L55)
