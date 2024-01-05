declare namespace TonfuraSDK {
  interface Settings {
    /**
     * The Tonfura id that can be found in the Tonfura dashboard.
     *
     */
    id?: number;

    /**
     * The Tonfura API key that can be found in the Tonfura dashboard.
     *
     * Defaults to: "demo" (a rate-limited public API key)
     */
    apiKey?: string;

    /**
     * The name of the network. Once configured, the network cannot be changed. To
     * use a different network, instantiate a new `Tonfura` instance.
     *
     * Defaults to: Network.ETH_MAINNET
     */
    network?: import('../constants').Network;

    /** The maximum number of retries to attempt if a request fails. Defaults to 5. */
    maxRetries?: number;

    /**
     * Optional URL endpoint to use for all requests. Setting this field will
     * override the URL generated by the {@link network} and {@link apiKey} fields.
     *
     * This field is useful for testing or for using a custom node endpoint. Note
     * that not all methods will work with custom URLs.
     */
    url?: string;
  }

  namespace Core {
    interface Payload<Params> {
      jsonrpc: string;
      id: number;
      method: string;
      params?: Params;
    }

    namespace GetAddressInformation {
      type Params = {
        address: string;
      };

      type Response =
        import('./output/ton_getAddressInformation').ReturnGetAddressInfromation;
    }

    namespace GetExtendedaddressinformation {
      type Params = {
        address: string;
      };

      type Response =
        import('./output/ton_getExtendedaddressinformation').ReturnGetExtendedaddressinformation;
    }

    namespace GetWalletinformation {
      type Params = {
        address: string;
      };

      type Response =
        import('./output/ton_getWalletinformation').ReturnGetWalletinformation;
    }

    namespace GetAddressbalance {
      type Params = {
        address: string;
      };

      type Response =
        import('./output/ton_getAddressbalance').ReturnGetAddressbalance;
    }

    namespace GetAddressstate {
      type Params = {
        address: string;
      };

      type Response =
        import('./output/ton_getAddressstate').ReturnGetAddressstate;
    }

    namespace PackAddress {
      type Params = {
        address: string;
      };

      type Response = import('./output/ton_packAddress').ReturnPackAddress;
    }

    namespace UnpackAddress {
      type Params = {
        address: string;
      };

      type Response = import('./output/ton_unpackAddress').ReturnUnpackAddress;
    }

    namespace GetTokenData {
      type Params = {
        address: string;
      };

      type Response = import('./output/ton_getTokenData').ReturnGetTokenData;
    }

    namespace DetectAddress {
      type Params = {
        address: string;
      };

      type Response = import('./output/ton_detectAddress').ReturnDetectAddress;
    }

    namespace GetMasterchainInfo {
      type Params = {};

      type Response =
        import('./output/ton_getMasterchaininfo').ReturnGetMasterchaininfo;
    }

    namespace GetMasterchainBlockSignatures {
      type Params = {
        seqno: number;
      };

      type Response =
        import('./output/ton_getMasterchainblocksignatures').ReturnGetMasterchainblocksignatures;
    }

    namespace GetShardBlockProof {
      type Params = {
        workchain: number;
        shard: string;
        seqno: number;
        from_seqno?: number;
      };

      type Response =
        import('./output/ton_getShardblockproof').ReturnGetShardblockproof;
    }

    namespace GetConsensusBlock {
      type Params = {};

      type Response =
        import('./output/ton_getConsensusblock').ReturnConsensusblock;
    }

    namespace LookupBlock {
      type Params = {
        workchain: number;
        shard: string;
        seqno: number;
        lt?: number;
        unixtime?: string;
      };

      type Response = import('./output/ton_lookupBlock').ReturnLookupBlock;
    }

    namespace Shards {
      type Params = {
        seqno: number;
      };

      type Response = import('./output/ton_shards').ReturnShard;
    }

    namespace GetBlockHeader {
      type Params = {
        workchain: number;
        shard: string;
        seqno: number;
        root_hash?: string;
        file_hash?: string;
      };

      type Response =
        import('./output/ton_getBlockheader').ReturnGetBlockheader;
    }

    namespace GetTransactions {
      type Params = {
        address: string;
        limit: number;
        lt?: number;
        hash?: string;
        to_lt?: number;
        archival: boolean;
      };

      type Response =
        import('./output/ton_getTransactions').ReturnGetTransactions;
    }

    namespace GetBlockTransactions {
      type Params = {
        workchain: number;
        shard: string;
        seqno: number;
        root_hash?: string;
        file_hash?: string;
        after_lt?: number;
        after_hash?: string;
        count?: number;
      };

      type Response =
        import('./output/ton_getBlockTransactions').ReturnGetBlockTransactions;
    }

    namespace TryLocateTx {
      type Params = {
        source: string;
        destination: string;
        created_lt: number;
      };

      type Response = import('./output/ton_trylocatetx').ReturnTrylocatetx;
    }

    namespace TryLocateResultTx {
      type Params = {
        source: string;
        destination: string;
        created_lt: number;
      };

      type Response =
        import('./output/ton_trylocateresulttx').ReturnTrylocateresulttx;
    }

    namespace TryLocateSourceTx {
      type Params = {
        source: string;
        destination: string;
        created_lt: number;
      };

      type Response =
        import('./output/ton_trylocatesourcetx').ReturnTrylocatesourcetx;
    }

    namespace GetConfigParam {
      type Params = {
        config_id: number;
        seqno?: number;
      };

      type Response =
        import('./output/ton_getConfigparam').ReturnGetConfigparam;
    }

    namespace RunGetMethod {
      type Params = {
        address: string;
        method: string;
        stack: [];
      };

      type Response = import('./output/ton_runGetMethod').ReturnCall;
    }

    namespace Estimatefee {
      type Params = {
        address: string;
        body: string;
        init_code?: string;
        init_data?: string;
        ignore_chksig?: string;
      };

      type Response = import('./output/ton_estimatefee').ReturnEstimatefee;
    }
  }

  namespace Transact {
    interface Payload<Params> {
      jsonrpc: string;
      id: number;
      method: string;
      params?: Params;
    }

    namespace SendBoc {
      type Params = {
        boc: string;
      };

      type Response = import('./output/ton_sendBoc').ReturnSendBoc;
    }

    namespace SendBocReturnHash {
      type Params = {
        boc: string;
      };

      type Response = import('./output/ton_sendBoc').ReturnSendBoc;
    }

    // namespace SendQuery {
    //   type Params = {
    //     address: string;
    //     body: string;
    //     init_code: string;
    //     init_data: string;
    //   };

    //   type Response = import('./output/ton_sendQuery').ReturnSendQuery;
    // }
  }
}
