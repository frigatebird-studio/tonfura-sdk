[tonfura-sdk](../README.md) / [Exports](../modules.md) / Transact

# Class: Transact

The Transact contains methods used for sending transactions and
checking on the state of submitted transactions.

Do not call this constructor directly. Instead, instantiate an Tonfura object
with `const tonfura = new Tonfura(config)` and then access the transact via `tonfura.transact`.

## Table of contents

### Methods

- [sendBoc](Transact.md#sendboc)
- [sendBocReturnHash](Transact.md#sendbocreturnhash)

## Methods

### sendBoc

▸ **sendBoc**(`boc`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnSendBoc`\>, `any`\>\>

Send serialized boc file: fully packed and serialized external message to blockchain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `boc` | `string` |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnSendBoc`\>, `any`\>\>

#### Defined in

[api/Transact.ts:22](https://github.com/frigatebird-studio/tonfura-sdk/blob/02b08b5/src/api/Transact.ts#L22)

___

### sendBocReturnHash

▸ **sendBocReturnHash**(`boc`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnSendBoc`\>, `any`\>\>

Send serialized boc file: fully packed and serialized external message to blockchain. The method returns message hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `boc` | `string` |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnSendBoc`\>, `any`\>\>

#### Defined in

[api/Transact.ts:36](https://github.com/frigatebird-studio/tonfura-sdk/blob/02b08b5/src/api/Transact.ts#L36)
