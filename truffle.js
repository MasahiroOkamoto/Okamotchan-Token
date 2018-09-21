/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

 var HDWalletProvider = require("truffle-hdwallet-provider");
 var mnemonic = "cloud height flight voice tongue goose face fox blur trip vivid tonight";
 var accessToken = "v3/380423fe3bd84fc684ec7f6ea5e7d143";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "10"
    },
    ropsten: {
      provider: function(){
        return new HDWalletProvider (
          mnemonic,
          "https://ropsten.infura.io/" + accessToken
        );
      },
      network_id: "10",
      gas: 2000000
    }
  }
};
 // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

