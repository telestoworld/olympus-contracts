# Ω Telesto Smart Contracts


##  🔧 Setting up Local Development
Required: 
- [Node v14](https://nodejs.org/download/release/latest-v14.x/)  
- [Git](https://git-scm.com/downloads)


Local Setup Steps:
1. git clone https://github.com/TelestoDAO/telesto-contracts.git 
1. Install dependencies: `npm install` 
    - Installs [Hardhat](https://hardhat.org/getting-started/) & [OpenZepplin](https://docs.openzeppelin.com/contracts/4.x/) dependencies
1. Compile Solidity: `npm run compile`
1. **_TODO_**: How to do local deployments of the contracts.


## 🤨 How it all works
![High Level Contract Interactions](https://c.tenor.com/KOwL-etspd8AAAAM/magic-shia-labeouf.gif)



## Alfajore Contracts & Addresses
|Contract       | Addresss                                                                                                           
|:-------------:|:-------------------------------------------------------------------------------------------------------------------
TELO|            0x9B64F9Be1C457dDDb24D7653a6186d14d332571f
sTELO|           0x88EcF7e64A52A4fdac23AEdE4BEad4760096Cb00
CUSD|            0x42CA2AD44521204d57ead3E5465688F100dc1c13
CEuro|           0x74C422a2D64dc0f68b80DFC10Ba06e92058F14AA
Treasury|        0x792C37e5E135A4a643796d17e4C1D8De1cf59E0f
Calc|            0xe099832809AAc8E049a83149c35dEDbe6686E763
Staking|         0x417Bcb70d52F3ABeec13A22B07616a76C11493d4
Distributor|     0x5ffd586734959F5B61A276224F47Ae243A7C1ffE
Staking Wawrmup| 0x81239cc659c9e7cfFC3D2c1A8a402766a5D7535A
Staking Helper | 0x96a7639daf07De63fe18dc9DD5854436526d775A
CUSD Bond|       0x4Bf8eFEA933Bcd603EB03bBE98f19BE8c2e22439
CEuro Bond|      0xB93f2438d6Eff91e5b5b8c25d24CA76E541A2012
CUSDBond Depo|   0x821A27E1A7959dC970e1Cc01F6002852F3C81C69
CEUROBond Depo|  0xe709DFa3dc50175f9c6FB039A4F005D2b916652A
RedeemHelper |   0x76642Ae18626aaC83723B997c64cF7488ac9b46D
WrappedTelo |    0xB08B5777fd0AD1175fC62B9A55912c38b559260c
## Allocator Guide

The following is a guide for interacting with the treasury as a reserve allocator.

A reserve allocator is a contract that deploys funds into external strategies, such as Aave, Curve, etc.

Treasury Address: `0x1fF807aDa4DDCc0638B0681A557E9C2582678a03`

**Managing**:
The first step is withdraw funds from the treasury via the "manage" function. "Manage" allows an approved address to withdraw excess reserves from the treasury.

*Note*: This contract must have the "reserve manager" permission, and that withdrawn reserves decrease the treasury's ability to mint new TELO (since backing has been removed).

Pass in the token address and the amount to manage. The token will be sent to the contract calling the function.

```
function manage( address _token, uint _amount ) external;
```

Managing treasury assets should look something like this:
```
treasury.manage( CUSD, amountToManage );
```

**Returning**:
The second step is to return funds after the strategy has been closed.
We utilize the `deposit` function to do this. Deposit allows an approved contract to deposit reserve assets into the treasury, and mint TELO against them. In this case however, we will NOT mint any TELO. This will be explained shortly.

*Note* The contract must have the "reserve depositor" permission, and that deposited reserves increase the treasury's ability to mint new TELO (since backing has been added).


Pass in the address sending the funds (most likely the allocator contract), the amount to deposit, and the address of the token. The final parameter, profit, dictates how much TELO to send. send_, the amount of TELO to send, equals the value of amount minus profit.
```
function deposit( address _from, uint _amount, address _token, uint _profit ) external returns ( uint send_ );
```

To ensure no TELO is minted, we first get the value of the asset, and pass that in as profit.
Pass in the token address and amount to get the treasury value.
```
function valueOf( address _token, uint _amount ) public view returns ( uint value_ );
```

All together, returning funds should look something like this:
```
treasury.deposit( address(this), amountToReturn, CUSD, treasury.valueOf( CUSD, amountToReturn ) );
```
