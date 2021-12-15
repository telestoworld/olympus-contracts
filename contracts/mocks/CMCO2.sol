pragma solidity ^0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CMCO2 is ERC20, Ownable {
    constructor() ERC20("CMCO2", "Celo TestNest Carbon Bond") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}