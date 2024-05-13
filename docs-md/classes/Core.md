[**tonfura-sdk**](../README.md) • **Docs**

***

[tonfura-sdk](../globals.md) / Core

# Class: Core

The Core contains all commonly-used ton's methods.

Do not call this constructor directly. Instead, instantiate an Tonfura object
with `const tonfura = new Tonfura(config)` and then access the Core via
`tonfura.core`.

## Properties

### config

> `private` `readonly` **config**: [`TonfuraConfig`](TonfuraConfig.md)

#### Source

[api/Core.ts:14](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L14)

## Methods

### detectAddress()

> **detectAddress**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnDetectAddress`\>, `any`\>\>

Get all possible address forms.

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnDetectAddress`\>, `any`\>\>

#### Source

[api/Core.ts:136](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L136)

***

### estimateFee()

> **estimateFee**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnEstimatefee`\>, `any`\>\>

Estimate fees required for query processing. body, init-code and init-data
accepted in serialized format (b64-encoded).

#### Parameters

• **params**: `EstimatefeeParams`

The variable of the block.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnEstimatefee`\>, `any`\>\>

#### Source

[api/Core.ts:361](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L361)

***

### getAddressBalance()

> **getAddressBalance**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`string`\>, `any`\>\>

Get balance (in nanotons) of a given address.

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`string`\>, `any`\>\>

#### Source

[api/Core.ts:77](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L77)

***

### getAddressInformation()

> **getAddressInformation**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetAddressInfromation`\>, `any`\>\>

Returns the information of a given address. Information includes the
balance, code, data and last_transaction_id

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetAddressInfromation`\>, `any`\>\>

#### Source

[api/Core.ts:23](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L23)

***

### getAddressState()

> **getAddressState**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`string`\>, `any`\>\>

Get state of a given address. State can be either unitialized, active or
frozen.

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`string`\>, `any`\>\>

#### Source

[api/Core.ts:94](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L94)

***

### getBlockHeader()

> **getBlockHeader**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetBlockheader`\>, `any`\>\>

Get metadata of a given block.

#### Parameters

• **params**: `GetBlockHeaderParams`

The variable of the block.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetBlockheader`\>, `any`\>\>

#### Source

[api/Core.ts:248](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L248)

***

### getBlockTransactions()

> **getBlockTransactions**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetBlockTransactions`\>, `any`\>\>

Get transactions of the given block.

#### Parameters

• **params**: `GetBlockTransactionsParams`

The variable of the block.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetBlockTransactions`\>, `any`\>\>

#### Source

[api/Core.ts:276](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L276)

***

### getConfigParam()

> **getConfigParam**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetConfigparam`\>, `any`\>\>

Get config by id.

#### Parameters

• **params**: `GetConfigParamParams`

The variable of the config.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetConfigparam`\>, `any`\>\>

#### Source

[api/Core.ts:332](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L332)

***

### getConsensusBlock()

> **getConsensusBlock**(): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnConsensusblock`\>, `any`\>\>

Get consensus block and its update timestamp.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnConsensusblock`\>, `any`\>\>

#### Source

[api/Core.ts:206](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L206)

***

### getExtendedAddressInformation()

> **getExtendedAddressInformation**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetExtendedaddressinformation`\>, `any`\>\>

Returns more information of a given address. Information not only includes
the balance, code, data and last_transaction_id, But also includes the
parsed additional information for known contract types This method is based
on tonlib's function getAccountState. For detecting wallets we recommend to
use getWalletInformation.

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetExtendedaddressinformation`\>, `any`\>\>

#### Source

[api/Core.ts:43](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L43)

***

### getMasterchainBlockSignatures()

> **getMasterchainBlockSignatures**(`seqno`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetMasterchainblocksignatures`\>, `any`\>\>

Get up-to-date masterchain state.

#### Parameters

• **seqno**: `number`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetMasterchainblocksignatures`\>, `any`\>\>

#### Source

[api/Core.ts:177](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L177)

***

### getMasterchainInfo()

> **getMasterchainInfo**(): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetMasterchaininfo`\>, `any`\>\>

Get up-to-date masterchain state.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetMasterchaininfo`\>, `any`\>\>

#### Source

[api/Core.ts:163](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L163)

***

### getShardBlockProof()

> **getShardBlockProof**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetShardblockproof`\>, `any`\>\>

Get merkle proof of shardchain block.

#### Parameters

• **params**: `GetShardBlockProofParams`

The variable of the shardchain block.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetShardblockproof`\>, `any`\>\>

#### Source

[api/Core.ts:193](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L193)

***

### getTokenData()

> **getTokenData**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetTokenData`\>, `any`\>\>

Get NFT or Jetton information.

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetTokenData`\>, `any`\>\>

#### Source

[api/Core.ts:150](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L150)

***

### getTransactions()

> **getTransactions**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`GetTransactionsResult`\>, `any`\>\>

Get transaction history of a given address.

#### Parameters

• **params**: `GetTransactionsParams`

The variable of the transactions.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`GetTransactionsResult`\>, `any`\>\>

#### Source

[api/Core.ts:262](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L262)

***

### getWalletInformation()

> **getWalletInformation**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetWalletinformation`\>, `any`\>\>

Retrieve wallet information. This method parses contract state and
currently supports more wallet types than getExtendedAddressInformation:
simple wallet, standart wallet, v3 wallet, v4 wallet.

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnGetWalletinformation`\>, `any`\>\>

#### Source

[api/Core.ts:61](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L61)

***

### jettonBurns()

> **jettonBurns**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`JettonBurnsResult`\>, `any`\>\>

#### Parameters

• **params**: `JettonBurnsParams`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`JettonBurnsResult`\>, `any`\>\>

#### Source

[api/Core.ts:393](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L393)

***

### jettonMasters()

> **jettonMasters**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`JettonMastersResult`\>, `any`\>\>

#### Parameters

• **params**: `JettonMastersParams`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`JettonMastersResult`\>, `any`\>\>

#### Source

[api/Core.ts:369](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L369)

***

### jettonTransfers()

> **jettonTransfers**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`JettonTransfersResult`\>, `any`\>\>

#### Parameters

• **params**: `JettonTransfersParams`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`JettonTransfersResult`\>, `any`\>\>

#### Source

[api/Core.ts:385](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L385)

***

### jettonWallets()

> **jettonWallets**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`JettonWalletsResult`\>, `any`\>\>

#### Parameters

• **params**: `JettonWalletsParams`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`JettonWalletsResult`\>, `any`\>\>

#### Source

[api/Core.ts:377](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L377)

***

### lookupBlock()

> **lookupBlock**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnLookupBlock`\>, `any`\>\>

Look up block by either seqno, lt or unixtime.

#### Parameters

• **params**: `LookupBlockParams`

The variable of the block.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnLookupBlock`\>, `any`\>\>

#### Source

[api/Core.ts:220](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L220)

***

### nftItems()

> **nftItems**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`NFTItemsResult`\>, `any`\>\>

#### Parameters

• **params**: `NFTItemsParams`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`NFTItemsResult`\>, `any`\>\>

#### Source

[api/Core.ts:401](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L401)

***

### packAddress()

> **packAddress**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`string`\>, `any`\>\>

Convert an address from raw to human-readable format.

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`string`\>, `any`\>\>

#### Source

[api/Core.ts:108](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L108)

***

### runGetMethod()

> **runGetMethod**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnCall`\>, `any`\>\>

Run get method on smart contract.

#### Parameters

• **params**: `RunGetMethodParams`

The variable of the block.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnCall`\>, `any`\>\>

#### Source

[api/Core.ts:346](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L346)

***

### shards()

> **shards**(`seqno`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnShard`\>, `any`\>\>

Get shards information.

#### Parameters

• **seqno**: `number`

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnShard`\>, `any`\>\>

#### Source

[api/Core.ts:234](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L234)

***

### tryLocateResultTx()

> **tryLocateResultTx**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnTrylocateresulttx`\>, `any`\>\>

Locate outcoming transaction of destination address by incoming message

#### Parameters

• **params**: `TryLocateResultTxParams`

The variable of the transactions.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnTrylocateresulttx`\>, `any`\>\>

#### Source

[api/Core.ts:304](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L304)

***

### tryLocateSourceTx()

> **tryLocateSourceTx**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnTrylocatesourcetx`\>, `any`\>\>

Locate incoming transaction of source address by outcoming message.

#### Parameters

• **params**: `TryLocateSourceTxParams`

The variable of the transactions.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnTrylocatesourcetx`\>, `any`\>\>

#### Source

[api/Core.ts:318](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L318)

***

### tryLocateTx()

> **tryLocateTx**(`params`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnTrylocatetx`\>, `any`\>\>

Locate outcoming transaction of destination address by incoming message.

#### Parameters

• **params**: `TryLocateTxParams`

The variable of the transactions.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`ReturnTrylocatetx`\>, `any`\>\>

#### Source

[api/Core.ts:290](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L290)

***

### unpackAddress()

> **unpackAddress**(`address`): `Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`string`\>, `any`\>\>

Convert an address from human-readable to raw format.

#### Parameters

• **address**: `string`

The address of the account.

#### Returns

`Promise`\<`AxiosResponse`\<`JsonRpcResponse`\<`string`\>, `any`\>\>

#### Source

[api/Core.ts:122](https://github.com/frigatebird-studio/tonfura-sdk/blob/f15b2955edbdca92a3459e41d07c042cafc9718a/src/api/Core.ts#L122)
