pragma solidity ^0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CUSD is ERC20, Ownable {
    constructor() ERC20("CUSD", "Celo TestNest USD") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}