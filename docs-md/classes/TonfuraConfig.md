[tonfura-sdk](../README.md) / [Exports](../modules.md) / TonfuraConfig

# Class: TonfuraConfig

This class holds the config information for the SDK client instance and
exposes the underlying providers for more advanced use cases.

## Table of contents

### Constructors

- [constructor](TonfuraConfig.md#constructor)

### Properties

- [apiKey](TonfuraConfig.md#apikey)
- [id](TonfuraConfig.md#id)
- [maxRetries](TonfuraConfig.md#maxretries)
- [network](TonfuraConfig.md#network)
- [url](TonfuraConfig.md#url)

### Methods

- [getProvider](TonfuraConfig.md#getprovider)

## Constructors

### constructor

• **new TonfuraConfig**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Settings` |

#### Defined in

[api/TonfuraConfig.ts:42](https://github.com/frigatebird-studio/tonfura-sdk/blob/d4abfff/src/api/TonfuraConfig.ts#L42)

## Properties

### apiKey

• `Readonly` **apiKey**: `string`

The Tonfura API key.

#### Defined in

[api/TonfuraConfig.ts:21](https://github.com/frigatebird-studio/tonfura-sdk/blob/d4abfff/src/api/TonfuraConfig.ts#L21)

___

### id

• `Readonly` **id**: `number`

The Tonfura id.

#### Defined in

[api/TonfuraConfig.ts:18](https://github.com/frigatebird-studio/tonfura-sdk/blob/d4abfff/src/api/TonfuraConfig.ts#L18)

___

### maxRetries

• `Readonly` **maxRetries**: `number`

The maximum number of retries to perform.

#### Defined in

[api/TonfuraConfig.ts:27](https://github.com/frigatebird-studio/tonfura-sdk/blob/d4abfff/src/api/TonfuraConfig.ts#L27)

___

### network

• `Readonly` **network**: [`Network`](../enums/Network.md)

The Network that this SDK is associated with.

#### Defined in

[api/TonfuraConfig.ts:24](https://github.com/frigatebird-studio/tonfura-sdk/blob/d4abfff/src/api/TonfuraConfig.ts#L24)

___

### url

• `Optional` `Readonly` **url**: `string`

The optional hardcoded URL to send requests to instead of using the network
and apiKey.

#### Defined in

[api/TonfuraConfig.ts:33](https://github.com/frigatebird-studio/tonfura-sdk/blob/d4abfff/src/api/TonfuraConfig.ts#L33)

## Methods

### getProvider

▸ **getProvider**(): `Promise`<[`TonfuraProvider`](TonfuraProvider.md)\>

Returns an TonfuraProvider instance. Only one provider is created per
Tonfura instance.

The TonfuraProvider is a wrapper around `TonfuraProvider` class and
has been expanded to support Tonfura's Enhanced APIs.

Most common methods on the provider are available as top-level methods on
the [Tonfura](Tonfura.md) instance, but the provider is exposed here to access
other less-common methods.

#### Returns

`Promise`<[`TonfuraProvider`](TonfuraProvider.md)\>

#### Defined in

[api/TonfuraConfig.ts:63](https://github.com/frigatebird-studio/tonfura-sdk/blob/d4abfff/src/api/TonfuraConfig.ts#L63)
