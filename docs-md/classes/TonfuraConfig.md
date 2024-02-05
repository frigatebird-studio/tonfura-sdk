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
| `config?` | `Settings` |

#### Defined in

[api/TonfuraConfig.ts:38](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/TonfuraConfig.ts#L38)

## Properties

### apiKey

• `Readonly` **apiKey**: `string`

The Tonfura API key.

#### Defined in

[api/TonfuraConfig.ts:17](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/TonfuraConfig.ts#L17)

___

### maxRetries

• `Readonly` **maxRetries**: `number`

The maximum number of retries to perform.

#### Defined in

[api/TonfuraConfig.ts:23](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/TonfuraConfig.ts#L23)

___

### network

• `Readonly` **network**: [`Network`](../enums/Network.md)

The Network that this SDK is associated with.

#### Defined in

[api/TonfuraConfig.ts:20](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/TonfuraConfig.ts#L20)

___

### url

• `Optional` `Readonly` **url**: `string`

The optional hardcoded URL to send requests to instead of using the network
and apiKey.

#### Defined in

[api/TonfuraConfig.ts:29](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/TonfuraConfig.ts#L29)

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

[api/TonfuraConfig.ts:54](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/TonfuraConfig.ts#L54)
