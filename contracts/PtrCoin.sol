pragma solidity ^0.4.2;

contract PtrCoin {
    address minter;
    mapping (address => uint) public balances;

    event Mint(address to, uint amount);
    event Sent(address from, address to, uint amount);

    modifier onlyMinter() {
        require(msg.sender == minter);
        _;
    }

    function PtrCoin() {
        minter = msg.sender;
    }

    function mint(address receiver, uint amount) onlyMinter {
        balances[receiver] += amount;
        Mint(receiver, amount);
    }

    function transfer(address receiver, uint amount) {
        if (balances[msg.sender] < amount) return;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Sent(msg.sender, receiver, amount);
    }
}