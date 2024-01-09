[tonfura-sdk](../README.md) / [Exports](../modules.md) / Core

# Class: Core

The Core contains all commonly-used methods.

Do not call this constructor directly. Instead, instantiate an Tonfura object
with `const tonfura = new Tonfura(config)` and then access the Core via `tonfura.core`.

## Table of contents

### Constructors

- [constructor](Core.md#constructor)

### Methods

- [detectAddress](Core.md#detectaddress)
- [estimateFee](Core.md#estimatefee)
- [getAddressBalance](Core.md#getaddressbalance)
- [getAddressInformation](Core.md#getaddressinformation)
- [getAddressState](Core.md#getaddressstate)
- [getBlockHeader](Core.md#getblockheader)
- [getBlockTransactions](Core.md#getblocktransactions)
- [getConfigParam](Core.md#getconfigparam)
- [getConsensusBlock](Core.md#getconsensusblock)
- [getExtendedAddressInformation](Core.md#getextendedaddressinformation)
- [getMasterchainBlockSignatures](Core.md#getmasterchainblocksignatures)
- [getMasterchainInfo](Core.md#getmasterchaininfo)
- [getShardBlockProof](Core.md#getshardblockproof)
- [getTokenData](Core.md#gettokendata)
- [getTransactions](Core.md#gettransactions)
- [getWalletInformation](Core.md#getwalletinformation)
- [lookupBlock](Core.md#lookupblock)
- [packAddress](Core.md#packaddress)
- [runGetMethod](Core.md#rungetmethod)
- [shards](Core.md#shards)
- [tryLocateResultTx](Core.md#trylocateresulttx)
- [tryLocateSourceTx](Core.md#trylocatesourcetx)
- [tryLocateTx](Core.md#trylocatetx)
- [unpackAddress](Core.md#unpackaddress)

## Constructors

### constructor

• **new Core**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TonfuraConfig`](TonfuraConfig.md) |

#### Defined in

[api/Core.ts:16](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L16)

## Methods

### detectAddress

▸ **detectAddress**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnDetectAddress`\>, `Params`\>\>

Get all possible address forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnDetectAddress`\>, `Params`\>\>

#### Defined in

[api/Core.ts:195](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L195)

___

### estimateFee

▸ **estimateFee**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnEstimatefee`\>, `Params`\>\>

Estimate fees required for query processing. body, init-code and init-data accepted in serialized format (b64-encoded).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnEstimatefee`\>, `Params`\>\>

#### Defined in

[api/Core.ts:533](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L533)

___

### getAddressBalance

▸ **getAddressBalance**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetAddressbalance`\>, `Params`\>\>

Get balance (in nanotons) of a given address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetAddressbalance`\>, `Params`\>\>

#### Defined in

[api/Core.ts:105](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L105)

___

### getAddressInformation

▸ **getAddressInformation**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetAddressInfromation`\>, `Params`\>\>

Returns the information of a given address.
Information includes the balance, code, data and last_transaction_id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetAddressInfromation`\>, `Params`\>\>

#### Defined in

[api/Core.ts:30](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L30)

___

### getAddressState

▸ **getAddressState**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetAddressstate`\>, `Params`\>\>

Get state of a given address. State can be either unitialized, active or frozen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetAddressstate`\>, `Params`\>\>

#### Defined in

[api/Core.ts:128](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L128)

___

### getBlockHeader

▸ **getBlockHeader**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetBlockheader`\>, `Params`\>\>

Get metadata of a given block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetBlockheader`\>, `Params`\>\>

#### Defined in

[api/Core.ts:363](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L363)

___

### getBlockTransactions

▸ **getBlockTransactions**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetBlockTransactions`\>, `Params`\>\>

Get transactions of the given block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetBlockTransactions`\>, `Params`\>\>

#### Defined in

[api/Core.ts:405](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L405)

___

### getConfigParam

▸ **getConfigParam**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetConfigparam`\>, `Params`\>\>

Get config by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the config. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetConfigparam`\>, `Params`\>\>

#### Defined in

[api/Core.ts:491](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L491)

___

### getConsensusBlock

▸ **getConsensusBlock**(): `Promise`<`AxiosResponse`<`Response`<`ReturnConsensusblock`\>, `Params`\>\>

Get consensus block and its update timestamp.

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnConsensusblock`\>, `Params`\>\>

#### Defined in

[api/Core.ts:301](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L301)

___

### getExtendedAddressInformation

▸ **getExtendedAddressInformation**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetExtendedaddressinformation`\>, `Params`\>\>

Returns more information of a given address.
Information not only includes the balance, code, data and last_transaction_id,
But also includes the parsed additional information for known contract types
This method is based on tonlib's function getAccountState.
For detecting wallets we recommend to use getWalletInformation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetExtendedaddressinformation`\>, `Params`\>\>

#### Defined in

[api/Core.ts:57](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L57)

___

### getMasterchainBlockSignatures

▸ **getMasterchainBlockSignatures**(`seqno`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetMasterchainblocksignatures`\>, `Params`\>\>

Get up-to-date masterchain state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `seqno` | `number` |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetMasterchainblocksignatures`\>, `Params`\>\>

#### Defined in

[api/Core.ts:258](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L258)

___

### getMasterchainInfo

▸ **getMasterchainInfo**(): `Promise`<`AxiosResponse`<`Response`<`ReturnGetMasterchaininfo`\>, `Params`\>\>

Get up-to-date masterchain state.

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetMasterchaininfo`\>, `Params`\>\>

#### Defined in

[api/Core.ts:238](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L238)

___

### getShardBlockProof

▸ **getShardBlockProof**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetShardblockproof`\>, `Params`\>\>

Get merkle proof of shardchain block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the shardchain block. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetShardblockproof`\>, `Params`\>\>

#### Defined in

[api/Core.ts:281](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L281)

___

### getTokenData

▸ **getTokenData**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetTokenData`\>, `Params`\>\>

Get NFT or Jetton information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetTokenData`\>, `Params`\>\>

#### Defined in

[api/Core.ts:218](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L218)

___

### getTransactions

▸ **getTransactions**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetTransactions`\>, `Params`\>\>

Get transaction history of a given address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the transactions. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetTransactions`\>, `Params`\>\>

#### Defined in

[api/Core.ts:384](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L384)

___

### getWalletInformation

▸ **getWalletInformation**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnGetWalletinformation`\>, `Params`\>\>

Retrieve wallet information.
This method parses contract state and
currently supports more wallet types than getExtendedAddressInformation: simple wallet, standart wallet, v3 wallet, v4 wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnGetWalletinformation`\>, `Params`\>\>

#### Defined in

[api/Core.ts:82](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L82)

___

### lookupBlock

▸ **lookupBlock**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnLookupBlock`\>, `Params`\>\>

Look up block by either seqno, lt or unixtime.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnLookupBlock`\>, `Params`\>\>

#### Defined in

[api/Core.ts:321](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L321)

___

### packAddress

▸ **packAddress**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnPackAddress`\>, `Params`\>\>

Convert an address from raw to human-readable format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnPackAddress`\>, `Params`\>\>

#### Defined in

[api/Core.ts:151](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L151)

___

### runGetMethod

▸ **runGetMethod**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnCall`\>, `Params`\>\>

Run get method on smart contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnCall`\>, `Params`\>\>

#### Defined in

[api/Core.ts:512](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L512)

___

### shards

▸ **shards**(`seqno`): `Promise`<`AxiosResponse`<`Response`<`ReturnShard`\>, `Params`\>\>

Get shards information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `seqno` | `number` |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnShard`\>, `Params`\>\>

#### Defined in

[api/Core.ts:342](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L342)

___

### tryLocateResultTx

▸ **tryLocateResultTx**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnTrylocateresulttx`\>, `Params`\>\>

Locate outcoming transaction of destination address by incoming message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the transactions. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnTrylocateresulttx`\>, `Params`\>\>

#### Defined in

[api/Core.ts:449](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L449)

___

### tryLocateSourceTx

▸ **tryLocateSourceTx**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnTrylocatesourcetx`\>, `Params`\>\>

Locate incoming transaction of source address by outcoming message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the transactions. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnTrylocatesourcetx`\>, `Params`\>\>

#### Defined in

[api/Core.ts:470](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L470)

___

### tryLocateTx

▸ **tryLocateTx**(`params`): `Promise`<`AxiosResponse`<`Response`<`ReturnTrylocatetx`\>, `Params`\>\>

Locate outcoming transaction of destination address by incoming message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the transactions. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnTrylocatetx`\>, `Params`\>\>

#### Defined in

[api/Core.ts:428](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L428)

___

### unpackAddress

▸ **unpackAddress**(`address`): `Promise`<`AxiosResponse`<`Response`<`ReturnUnpackAddress`\>, `Params`\>\>

Convert an address from human-readable to raw format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`Response`<`ReturnUnpackAddress`\>, `Params`\>\>

#### Defined in

[api/Core.ts:172](https://github.com/frigatebird-studio/tonfura-sdk/blob/d0deefd/src/api/Core.ts#L172)
