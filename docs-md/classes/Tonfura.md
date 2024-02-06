[tonfura-sdk](../README.md) / [Exports](../modules.md) / Tonfura

# Class: Tonfura

The Tonfura SDK client. This class is the main entry point into Tonfura's
APIs and separates functionality into different namespaces.

Each SDK instance is associated with a specific network and API key. To use a
different network or API key, create a new instance of [Tonfura](Tonfura.md).

## Table of contents

### Constructors

- [constructor](Tonfura.md#constructor)

### Properties

- [config](Tonfura.md#config)
- [core](Tonfura.md#core)
- [transact](Tonfura.md#transact)

## Constructors

### constructor

• **new Tonfura**(`settings?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `TonfuraSettings` |

#### Defined in

[api/Tonfura.ts:42](https://github.com/frigatebird-studio/tonfura-sdk/blob/b7fe1b0/src/api/Tonfura.ts#L42)

## Properties

### config

• `Readonly` **config**: [`TonfuraConfig`](TonfuraConfig.md)

Holds the setting information for the instance of the Tonfura SDK client
and allows access to the underlying providers.

#### Defined in

[api/Tonfura.ts:31](https://github.com/frigatebird-studio/tonfura-sdk/blob/b7fe1b0/src/api/Tonfura.ts#L31)

___

### core

• `Readonly` **core**: [`Core`](Core.md)

The `core` contains the core ton json-rpc calls.

#### Defined in

[api/Tonfura.ts:19](https://github.com/frigatebird-studio/tonfura-sdk/blob/b7fe1b0/src/api/Tonfura.ts#L19)

___

### transact

• `Readonly` **transact**: [`Transact`](Transact.md)

The `transact` contains methods for sending transactions and
checking on the state of submitted transasctions.

#### Defined in

[api/Tonfura.ts:25](https://github.com/frigatebird-studio/tonfura-sdk/blob/b7fe1b0/src/api/Tonfura.ts#L25)
