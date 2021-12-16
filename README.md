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
![High Level Contract Interactions]![flowchart](https://user-images.githubusercontent.com/46767991/145928184-089c48d6-c2ce-452d-b76b-a3a52ef44e80.png)




## Alfajore Contracts & Addresses
|Contract       | Addresss                                                                                                           
|:-------------:|:-------------------------------------------------------------------------------------------------------------------
TELO| 0x5380C0aEDbc84dE7eC4968d650038bC22431643B
sTELO| 0x3fbE106d29493D0B93CaF70910a05b00d4649612
CUSD| 0x991CEF2341FccB6244eB5f712F5862035dd33a11
CEuro| 0x428E7Fe9ddD583657E268099C7Fb8be6e7B61F5a
CMC02|  0xF8cB093DDE6501c84d30711e050eA744Bb85BB61
Treasury| 0x8dA432538f58EA8423c6D7DE783D113d6301b4FA
Calc| 0x21459bad1747d1edFb8a2a8bf085b4d44cfD1A30
Staking| 0x0be24afDA20209FDe1d71C280AcB2E82150d0B6C
Distributor| 0x90341A01192b4B1014e66f8a370F5DD7042BcEe2
Staking Wawrmup| 0x977cA6BbC7Bd1d6e51b2b7A437C12D7a23b47c69
Staking Helper| 0xf46aDB112f9819481412E20D5172B7dfe2bc9f9b
telocUSDPair Liquidity Pair | 0xd9f7d40De213a39b62C295f99BDB38FC4e87879D
teloCUSDPair Bond Depo | 0xa5FbdE41486fCB53A1C236aDc65430F0d7A62Bdc
RedeemHelper |   0xF286a8474A86DA09327455D911008ff4e1D5138F
WrappedTelo |    0xA4d4b39A73a4688d88F02d2d73164409a35257eF
CMC02 Bond | 0x614fA71cBF00c8Bff4d0B1C3E43740bDfDf5360b
## Allocator Guide

The following is a guide for interacting with the treasury as a reserve allocator.

A reserve allocator is a contract that deploys funds into external strategies, such as Aave, Curve, etc.

Treasury Address: `0x8dA432538f58EA8423c6D7DE783D113d6301b4FA`

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
