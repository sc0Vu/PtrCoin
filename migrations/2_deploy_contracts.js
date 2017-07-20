var Minter = artifacts.require("./Minter.sol");
var PtrCoin = artifacts.require("./PtrCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Minter);
  deployer.link(Minter, PtrCoin);
  deployer.deploy(PtrCoin);
};
