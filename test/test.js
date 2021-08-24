const { expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require("chai");
const { legos } = require("@studydefi/money-legos");

describe("Init test", function () {
  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
  });

  describe("Local", function () {
    let tokenName = "Token"
    let tokenSymbol = "TKN"
    let initialSupply = 1e6

    beforeEach(async function () {
      TokenEthers = await ethers.getContractFactory("Token");
      tokenEthers = await TokenEthers.deploy(tokenName, tokenSymbol, initialSupply)
    })

    it("contract deployment..", async function () {
      expect(await tokenEthers.name()).to.equal(tokenName)
      expect(await tokenEthers.symbol()).to.equal(tokenSymbol)
      expect(await tokenEthers.totalSupply()).to.equal(initialSupply)
      expect(await tokenEthers.balanceOf(owner.address)).to.equal(initialSupply)
    });

  });

  describe("Mainnet", function () {
    beforeEach(async function () {
      uniFactoryEthers = new ethers.Contract(legos.uniswapV2.factory.address, legos.uniswapV2.factory.abi, owner)
      uniFactoryWeb3 = new web3.eth.Contract(legos.uniswapV2.factory.abi, legos.uniswapV2.factory.address)
    })

    it("interaction with the contract via ethers...", async function () {
      expect(await uniFactoryEthers.allPairsLength()).to.be.above(5e4);
    });

    it("interaction with the contract via web3...", async function () {
      expect(Number(await uniFactoryWeb3.methods.allPairsLength().call())).to.be.above(5e4);
    });
  });
});
