pragma solidity ^0.4.2;

contract Minter {
	address minter;

	modifier onlyMinter() {
        require(msg.sender == minter);
        _;
    }
}