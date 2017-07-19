// var ConvertLib = artifacts.require("./ConvertLib.sol");
var PtrCoin = artifacts.require("./PtrCoin.sol");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(PtrCoin);
};
