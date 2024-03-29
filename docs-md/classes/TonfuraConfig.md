[tonfura-sdk](../README.md) / [Exports](../modules.md) / TonfuraConfig

# Class: TonfuraConfig

This class holds the config information for the SDK client instance and
exposes the underlying providers for more advanced use cases.

## Table of contents

### Constructors

- [constructor](TonfuraConfig.md#constructor)

### Properties

- [apiKey](TonfuraConfig.md#apikey)
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
| `config?` | `TonfuraSettings` |

#### Defined in

[api/TonfuraConfig.ts:39](https://github.com/frigatebird-studio/tonfura-sdk/blob/02b08b5/src/api/TonfuraConfig.ts#L39)

## Properties

### apiKey

• `Readonly` **apiKey**: `string`

The Tonfura API key.

#### Defined in

[api/TonfuraConfig.ts:18](https://github.com/frigatebird-studio/tonfura-sdk/blob/02b08b5/src/api/TonfuraConfig.ts#L18)

___

### maxRetries

• `Readonly` **maxRetries**: `number`

The maximum number of retries to perform.

#### Defined in

[api/TonfuraConfig.ts:24](https://github.com/frigatebird-studio/tonfura-sdk/blob/02b08b5/src/api/TonfuraConfig.ts#L24)

___

### network

• `Readonly` **network**: [`Network`](../enums/Network.md)

The Network that this SDK is associated with.

#### Defined in

[api/TonfuraConfig.ts:21](https://github.com/frigatebird-studio/tonfura-sdk/blob/02b08b5/src/api/TonfuraConfig.ts#L21)

___

### url

• `Optional` `Readonly` **url**: `string`

The optional hardcoded URL to send requests to instead of using the network
and apiKey.

#### Defined in

[api/TonfuraConfig.ts:30](https://github.com/frigatebird-studio/tonfura-sdk/blob/02b08b5/src/api/TonfuraConfig.ts#L30)

## Methods

### getProvider

▸ **getProvider**(): `Promise`<[`TonfuraProvider`](TonfuraProvider.md)\>

Returns an TonfuraProvider instance. Only one provider is created per
Tonfura instance.

The TonfuraProvider is a wrapper around `axios` class and
has been expanded to support Tonfura's APIs.

#### Returns

`Promise`<[`TonfuraProvider`](TonfuraProvider.md)\>

#### Defined in

[api/TonfuraConfig.ts:55](https://github.com/frigatebird-studio/tonfura-sdk/blob/02b08b5/src/api/TonfuraConfig.ts#L55)
