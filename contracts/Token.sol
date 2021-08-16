pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Token is ERC20 {
  constructor(string memory name, string memory symbol, uint initialSupply) ERC20(name, symbol){
    _mint(msg.sender, initialSupply);
    console.log("Minted %s %s to %s", initialSupply, symbol, msg.sender);
  }
}