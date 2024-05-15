[**tonfura-sdk**](../README.md) • **Docs**

***

[tonfura-sdk](../globals.md) / Transact

# Class: Transact

The Transact contains methods used for sending transactions and checking on
the state of submitted transactions.

Do not call this constructor directly. Instead, instantiate an Tonfura object
with `const tonfura = new Tonfura(config)` and then access the transact via
`tonfura.transact`.

## Properties

### config

> `private` `readonly` **config**: [`TonfuraConfig`](TonfuraConfig.md)

#### Source

[api/Transact.ts:15](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Transact.ts#L15)

## Methods

### sendBoc()

> **sendBoc**(`boc`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnSendBoc`\>, `any`\>\>

Send serialized boc file: fully packed and serialized external message to
blockchain.

#### Parameters

• **boc**: `string`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnSendBoc`\>, `any`\>\>

#### Source

[api/Transact.ts:24](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Transact.ts#L24)

***

### sendBocReturnHash()

> **sendBocReturnHash**(`boc`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnSendBoc`\>, `any`\>\>

Send serialized boc file: fully packed and serialized external message to
blockchain. The method returns message hash.

#### Parameters

• **boc**: `string`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnSendBoc`\>, `any`\>\>

#### Source

[api/Transact.ts:39](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Transact.ts#L39)
