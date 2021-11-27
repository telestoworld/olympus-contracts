/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy"
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

const { PRIVATE_KEY, TESTNET_URI, ALFAJORES_API_KEY } = process.env;
module.exports = {
  solidity: "0.7.5",
  defaultNetwork: "alfajores",
  networks: {
    hardhat: {
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 42220
    },
    mainnet: {
      url: "https://cloudflare-eth.com",
      accounts: [`0x${PRIVATE_KEY}`]
    },
    avax: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [`0x${PRIVATE_KEY}`]
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [`0x${PRIVATE_KEY}`]
    },
    binance: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: `${ALFAJORES_API_KEY}`
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0 // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1
    }
  },
}
