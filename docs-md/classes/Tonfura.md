[**tonfura-sdk**](../README.md) • **Docs**

***

[tonfura-sdk](../globals.md) / Tonfura

# Class: Tonfura

The Tonfura SDK client. This class is the main entry point into Tonfura's
APIs and separates functionality into different namespaces.

Each SDK instance is associated with a specific network and API key. To use a
different network or API key, create a new instance of [Tonfura](Tonfura.md).

## Constructors

### new Tonfura()

> **new Tonfura**(`settings`?): [`Tonfura`](Tonfura.md)

#### Parameters

• **settings?**: `TonfuraSettings`

#### Returns

[`Tonfura`](Tonfura.md)

#### Source

[api/Tonfura.ts:43](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Tonfura.ts#L43)

## Properties

### config

> `readonly` **config**: [`TonfuraConfig`](TonfuraConfig.md)

Holds the setting information for the instance of the Tonfura SDK client
and allows access to the underlying providers.

#### Source

[api/Tonfura.ts:29](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Tonfura.ts#L29)

***

### core

> `readonly` **core**: [`Core`](Core.md)

The `core` contains the core ton json-rpc calls.

#### Source

[api/Tonfura.ts:17](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Tonfura.ts#L17)

***

### transact

> `readonly` **transact**: [`Transact`](Transact.md)

The `transact` contains methods for sending transactions and checking on
the state of submitted transasctions.

#### Source

[api/Tonfura.ts:23](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Tonfura.ts#L23)
