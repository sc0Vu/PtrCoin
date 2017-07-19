var PtrCoin = artifacts.require("./PtrCoin.sol");

contract('PtrCoin', function(accounts) {
  it("should mint 100 PtrCoin in the first account", function() {
    var ptr;

    return PtrCoin.deployed().then(function(instance) {
      ptr = instance;
      return ptr.mint(accounts[0], 100);
    }).then(function () {
      return ptr.balances(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 100, "100 didn't mint");
    });
  });
  it("should transfer 1 PtrCoin to second account", function() {
    var ptr;

    return PtrCoin.deployed().then(function(instance) {
      ptr = instance;
      return ptr.transfer(accounts[1], 1);
    }).then(function () {
      return ptr.balances(accounts[1]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 1, "1 didn't sent");
    });
  });
});
