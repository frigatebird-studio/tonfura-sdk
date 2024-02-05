[tonfura-sdk](../README.md) / [Exports](../modules.md) / Core

# Class: Core

The Core contains all commonly-used methods.

Do not call this constructor directly. Instead, instantiate an Tonfura object
with `const tonfura = new Tonfura(config)` and then access the Core via `tonfura.core`.

## Table of contents

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

## Methods

### detectAddress

▸ **detectAddress**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnDetectAddress`\>, `any`\>\>

Get all possible address forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnDetectAddress`\>, `any`\>\>

#### Defined in

[api/Core.ts:137](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L137)

___

### estimateFee

▸ **estimateFee**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnEstimatefee`\>, `any`\>\>

Estimate fees required for query processing. body, init-code and init-data accepted in serialized format (b64-encoded).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnEstimatefee`\>, `any`\>\>

#### Defined in

[api/Core.ts:365](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L365)

___

### getAddressBalance

▸ **getAddressBalance**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetAddressbalance`\>, `any`\>\>

Get balance (in nanotons) of a given address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetAddressbalance`\>, `any`\>\>

#### Defined in

[api/Core.ts:75](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L75)

___

### getAddressInformation

▸ **getAddressInformation**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetAddressInfromation`\>, `any`\>\>

Returns the information of a given address.
Information includes the balance, code, data and last_transaction_id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetAddressInfromation`\>, `any`\>\>

#### Defined in

[api/Core.ts:21](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L21)

___

### getAddressState

▸ **getAddressState**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetAddressstate`\>, `any`\>\>

Get state of a given address. State can be either unitialized, active or frozen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetAddressstate`\>, `any`\>\>

#### Defined in

[api/Core.ts:91](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L91)

___

### getBlockHeader

▸ **getBlockHeader**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetBlockheader`\>, `any`\>\>

Get metadata of a given block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetBlockheader`\>, `any`\>\>

#### Defined in

[api/Core.ts:251](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L251)

___

### getBlockTransactions

▸ **getBlockTransactions**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetBlockTransactions`\>, `any`\>\>

Get transactions of the given block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetBlockTransactions`\>, `any`\>\>

#### Defined in

[api/Core.ts:279](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L279)

___

### getConfigParam

▸ **getConfigParam**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetConfigparam`\>, `any`\>\>

Get config by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the config. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetConfigparam`\>, `any`\>\>

#### Defined in

[api/Core.ts:337](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L337)

___

### getConsensusBlock

▸ **getConsensusBlock**(): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnConsensusblock`\>, `any`\>\>

Get consensus block and its update timestamp.

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnConsensusblock`\>, `any`\>\>

#### Defined in

[api/Core.ts:209](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L209)

___

### getExtendedAddressInformation

▸ **getExtendedAddressInformation**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetExtendedaddressinformation`\>, `any`\>\>

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

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetExtendedaddressinformation`\>, `any`\>\>

#### Defined in

[api/Core.ts:41](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L41)

___

### getMasterchainBlockSignatures

▸ **getMasterchainBlockSignatures**(`seqno`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetMasterchainblocksignatures`\>, `any`\>\>

Get up-to-date masterchain state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `seqno` | `number` |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetMasterchainblocksignatures`\>, `any`\>\>

#### Defined in

[api/Core.ts:180](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L180)

___

### getMasterchainInfo

▸ **getMasterchainInfo**(): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetMasterchaininfo`\>, `any`\>\>

Get up-to-date masterchain state.

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetMasterchaininfo`\>, `any`\>\>

#### Defined in

[api/Core.ts:166](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L166)

___

### getShardBlockProof

▸ **getShardBlockProof**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetShardblockproof`\>, `any`\>\>

Get merkle proof of shardchain block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the shardchain block. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetShardblockproof`\>, `any`\>\>

#### Defined in

[api/Core.ts:196](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L196)

___

### getTokenData

▸ **getTokenData**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetTokenData`\>, `any`\>\>

Get NFT or Jetton information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetTokenData`\>, `any`\>\>

#### Defined in

[api/Core.ts:153](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L153)

___

### getTransactions

▸ **getTransactions**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetTransactions`\>, `any`\>\>

Get transaction history of a given address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the transactions. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetTransactions`\>, `any`\>\>

#### Defined in

[api/Core.ts:265](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L265)

___

### getWalletInformation

▸ **getWalletInformation**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetWalletinformation`\>, `any`\>\>

Retrieve wallet information.
This method parses contract state and
currently supports more wallet types than getExtendedAddressInformation: simple wallet, standart wallet, v3 wallet, v4 wallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnGetWalletinformation`\>, `any`\>\>

#### Defined in

[api/Core.ts:59](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L59)

___

### lookupBlock

▸ **lookupBlock**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnLookupBlock`\>, `any`\>\>

Look up block by either seqno, lt or unixtime.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnLookupBlock`\>, `any`\>\>

#### Defined in

[api/Core.ts:223](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L223)

___

### packAddress

▸ **packAddress**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnPackAddress`\>, `any`\>\>

Convert an address from raw to human-readable format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnPackAddress`\>, `any`\>\>

#### Defined in

[api/Core.ts:107](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L107)

___

### runGetMethod

▸ **runGetMethod**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnCall`\>, `any`\>\>

Run get method on smart contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the block. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnCall`\>, `any`\>\>

#### Defined in

[api/Core.ts:351](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L351)

___

### shards

▸ **shards**(`seqno`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnShard`\>, `any`\>\>

Get shards information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `seqno` | `number` |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnShard`\>, `any`\>\>

#### Defined in

[api/Core.ts:237](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L237)

___

### tryLocateResultTx

▸ **tryLocateResultTx**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnTrylocateresulttx`\>, `any`\>\>

Locate outcoming transaction of destination address by incoming message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the transactions. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnTrylocateresulttx`\>, `any`\>\>

#### Defined in

[api/Core.ts:309](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L309)

___

### tryLocateSourceTx

▸ **tryLocateSourceTx**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnTrylocatesourcetx`\>, `any`\>\>

Locate incoming transaction of source address by outcoming message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the transactions. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnTrylocatesourcetx`\>, `any`\>\>

#### Defined in

[api/Core.ts:323](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L323)

___

### tryLocateTx

▸ **tryLocateTx**(`params`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnTrylocatetx`\>, `any`\>\>

Locate outcoming transaction of destination address by incoming message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Params` | The variable of the transactions. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnTrylocatetx`\>, `any`\>\>

#### Defined in

[api/Core.ts:295](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L295)

___

### unpackAddress

▸ **unpackAddress**(`address`): `Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnUnpackAddress`\>, `any`\>\>

Convert an address from human-readable to raw format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address of the account. |

#### Returns

`Promise`<`AxiosResponse`<`JsonRpcResponse`<`ReturnUnpackAddress`\>, `any`\>\>

#### Defined in

[api/Core.ts:121](https://github.com/frigatebird-studio/tonfura-sdk/blob/bf9e768/src/api/Core.ts#L121)
