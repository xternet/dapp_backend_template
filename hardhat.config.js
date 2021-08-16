require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require('dotenv').config()

const eth_mainnet = process.env.eth_mainnet
const polygon_mainnet = process.env.polygon_mainnet
const mnemonic = process.env.mnemonic

module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      forking: {
        url: eth_mainnet,
        //blockNumber: 10000000
      },
    },
    eth: {
      url: eth_mainnet,
      accounts: {mnemonic: mnemonic}
      //gasPrice: 20000000000,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: {mnemonic: mnemonic}
      //gasPrice: 20000000000,
    },
    polygon: {
      url: polygon_mainnet,
      accounts: {mnemonic: mnemonic},
      //gasPrice: 20000000000,
    }
  },
  solidity: "0.8.0",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
};