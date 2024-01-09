[tonfura-sdk](../README.md) / [Exports](../modules.md) / Transact

# Class: Transact

The Transact contains methods used for sending transactions and
checking on the state of submitted transactions.

Do not call this constructor directly. Instead, instantiate an Tonfura object
with `const tonfura = new Tonfura(config)` and then access the transact via `tonfura.transact`.

## Table of contents

### Constructors

- [constructor](Transact.md#constructor)

### Methods

- [sendBoc](Transact.md#sendboc)
- [sendBocReturnHash](Transact.md#sendbocreturnhash)

## Constructors

### constructor

• **new Transact**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TonfuraConfig`](TonfuraConfig.md) |

#### Defined in

[api/Transact.ts:17](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Transact.ts#L17)

## Methods

### sendBoc

▸ **sendBoc**(`boc`): `Promise`<`AxiosResponse`<`Response`<`ReturnSendBoc`\>, `Params`\>\>

Send serialized boc file: fully packed and serialized external message to blockchain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `boc` | `string` |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnSendBoc`\>, `Params`\>\>

#### Defined in

[api/Transact.ts:30](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Transact.ts#L30)

___

### sendBocReturnHash

▸ **sendBocReturnHash**(`boc`): `Promise`<`AxiosResponse`<`Response`<`ReturnSendBoc`\>, `Params`\>\>

Send serialized boc file: fully packed and serialized external message to blockchain. The method returns message hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `boc` | `string` |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnSendBoc`\>, `Params`\>\>

#### Defined in

[api/Transact.ts:51](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Transact.ts#L51)
