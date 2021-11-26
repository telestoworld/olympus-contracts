// // const { utils } = require("ethers").utils;
// const { expect } = require("chai");
// const { ethers, waffle } = require("hardhat");
// // const { waffle } = require("hardhat");
// // const { deployContract } = waffle;
// // const { expectRevert, time, BN } = require('@openzeppelin/test-helpers');
// // const { deployContract, loadFixture } = waffle;

// describe(
//   "PreTelestoe contract waffle/chai/ethers test",
//   function () {

// //     // Wallets
//     let deployer;
// //     let buyer1;
// //     let buyer2;

//     // Contracts
//     let OwnerSetRatioPriceCalculatorContract;
//     let priceCalculator;

//     let TestToken1Contract;
//     let tt1;

//     let TestToken2Contract;
//     let tt2;

// //     let PreTelestoSaleContract;
// //     let sale;

// //     let CUSDTokenContract;
// //     let cUsd;

// //     // let WBTCTokenContract;
// //     // let wbtc;

// //     // let UniswapV2FactoryContract;
// //     // let factory;

// //     // let UniswapV2EouterContract;
// //     // let router;

// //     // let UniswapV2Pair;
// //     // let cUsdtEthPairl
// //     // let ethWBTCPair;

//     beforeEach(
//       async function () {
//         [
//           deployer
// //           buyer1,
// //           buyer2
//         ] = await ethers.getSigners();

//         OwnerSetRatioPriceCalculatorContract = await ethers.getContractFactory("OwnerSetRatioPriceCalculator");
//         //Add check for events
//         priceCalculator = await OwnerSetRatioPriceCalculatorContract.connect( deployer ).deploy();
//         await priceCalculator.deployed();

//         TestToken1Contract = await ethers.getContractFactory("TestToken1");
//         //Add check for events
//         tt1 = await TestToken1Contract.connect( deployer ).deploy();
//         await tt1.deployed();

//         TestToken2Contract = await ethers.getContractFactory("TestToken2");
//         //Add check for events
//         tt2 = await TestToken2Contract.connect( deployer ).deploy();
//         await tt2.deployed();

// //         CUSDTokenContract = await ethers.getContractFactory("PreTelestoToken");
// //         //Add check for events
// //         cUsd = await CUSDTokenContract.connect( deployer ).deploy();
// //         await cUsd.deployed();

// //         //Add check for events
// //         cUsd = await CUSDTokenContract.connect( deployer ).deploy();
// //         await cUsd.deployed();

// //         PreTelestoSaleContract = await ethers.getContractFactory("PreTelestoSales");
// //         //Add check for events
// //         sale = await PreTelestoSaleContract.connect( deployer ).deploy();
// //         await sale.deployed();

// //         await sale.initialize( )

// //         // PreTelestoTokenContract = await ethers.getContractFactory("PreTelestoToken");
// //         // //Add check for events
// //         // poly = await PreTelestoTokenContract.connect( deployer ).deploy();
// //         // await poly.deployed();

// //         // PreTelestoTokenContract = await ethers.getContractFactory("PreTelestoToken");
// //         // //Add check for events
// //         // poly = await PreTelestoTokenContract.connect( deployer ).deploy();
// //         // await poly.deployed();

// //         // PreTelestoTokenContract = await ethers.getContractFactory("PreTelestoToken");
// //         // //Add check for events
// //         // poly = await PreTelestoTokenContract.connect( deployer ).deploy();
// //         // await poly.deployed();

// //         // PreTelestoTokenContract = await ethers.getContractFactory("PreTelestoToken");
// //         // //Add check for events
// //         // poly = await PreTelestoTokenContract.connect( deployer ).deploy();
// //         // await poly.deployed();
//       }
//     );

//     describe(
//       "OwnerSetRatioPriceCalculator",
//       function () {
//         it( 
//           "setPrice", 
//           async function() {

//             await priceCalculator.connect(deployer).setPrice( tt1.address, tt2.address, ethers.utils.parseUnits( String( 1 ), "ether" ) );

//             expect( await
//               priceCalculator.calculateAmountOfTokensPurchased( tt1.address, tt2.address, ethers.utils.parseUnits( String( 100 ), "ether" ) ) 
//             ).to.equal( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) );

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: token name.");
//             // expect( await poly.name() ).to.equal("PreTelesto");

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: token symbol.");
//             // expect( await poly.symbol() ).to.equal("pOLY");

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: token decimals.");
//             // expect( await poly.decimals() ).to.equal(18);

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner.");
//             // expect( await poly.owner() ).to.equal(deployer.address);
            
//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: Confirm minting enabled.");
//             // expect( await poly.connect( deployer ).allowMinting() ).to.equal( true );

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: Confirm seller approval enabled.");
//             // expect( await poly.connect( deployer ).requireSellerApproval() ).to.equal( true );

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner is approvedSeller.");
//             // expect( await poly.isApprovedSeller(deployer.address) ).to.equal( true );
            
//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: poly is approvedSeller.");
//             // expect( await poly.isApprovedSeller(poly.address) ).to.equal( true );
            
//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
//             // expect( await poly.isApprovedSeller( ethers.constants.AddressZero ) ).to.equal( true );
            
//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
//             // expect( await poly.isApprovedSeller( buyer1.address ) ).to.equal( false );
            
//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
//             // expect( await poly.isApprovedSeller( buyer2.address ) ).to.equal( false );

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: totalSupply.");
//             // expect( await poly.totalSupply() ).to.equal( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) );

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner balanceOf.");
//             // expect( await poly.connect(deployer).balanceOf(deployer.address) ).to.equal( String( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) ) );

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
//             // expect( await poly.connect(deployer).balanceOf(buyer1.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );

//             // console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
//             // expect( await poly.connect(deployer).balanceOf(buyer2.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );
//           }
//         );
//       }
//     );

// //     describe(
// //       "PreTelestoTokenOwnership",
// //       function () {
// //         // it( 
// //         //   "Minting", 
// //         //   async function() {
            
// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirm minting enabled.");
// //         //     expect( await poly.connect( deployer ).allowMinting() )
// //         //       .to.equal( true );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: buyer1 can't mint.");
// //         //     await expect( poly.connect(buyer1).mint( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith("Ownable: caller is not the owner");
            
// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: buyer1 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer1.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: only owner can mint.");
// //         //     await expect( () => poly.connect(deployer).mint( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) ) )
// //         //       .to.changeTokenBalance( poly, deployer, ethers.utils.parseUnits( String( 1000000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: totalSupply.");
// //         //     expect( await poly.totalSupply() )
// //         //       .to.equal( ethers.utils.parseUnits( String( 2000000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: owner balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(deployer.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 2000000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Disable minting.");
// //         //     await poly.connect( deployer ).disableMinting();
            
// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Disabled minting.");
// //         //     expect( await poly.connect( deployer ).allowMinting() ).to.equal( false );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: owner can't mint.");
// //         //     await expect( poly.connect( deployer ).mint( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Minting has been disabled." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: totalSupply.");
// //         //     expect( await poly.totalSupply() )
// //         //       .to.equal( ethers.utils.parseUnits( String( 2000000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: owner balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(deployer.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 2000000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: buyer1 can't mint.");
// //         //     await expect( poly.connect(buyer1).mint(ethers.utils.parseUnits( String( 1000000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Ownable: caller is not the owner" );
            
// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: buyer1 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer1.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );
// //         //   }
// //         // );
// //       }
// //     );

// //     describe(
// //       "PreTelestoTokenOwnership",
// //       function () {

// //         // it( 
// //         //   "Post-Deployment Transfer", 
// //         //   async function() {

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller(deployer.address) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: poly is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller(poly.address) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( ethers.constants.AddressZero ) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( buyer1.address ) ).to.equal( false );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( buyer2.address ) ).to.equal( false );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: totalSupply.");
// //         //     expect( await poly.totalSupply() ).to.equal( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(deployer.address) ).to.equal( String( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer1.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer2.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: Confirm seller approval required.");
// //         //     expect( await poly.requireSellerApproval() ).to.equal( true );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer1 can't transfer to buyer1 because they have no balance.");
// //         //     await expect( poly.connect(buyer1).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnershi::Minting: Confirming buyer1 can't transfer to buyer2 because they have no balance.");
// //         //     await expect( poly.connect(buyer1).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer2 can't transfer to buyer1 because they have no balance.");
// //         //     await expect( poly.connect(buyer2).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer2 can't transfer to buyer2 because they have no balance.");
// //         //     await expect( poly.connect(buyer2).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming deployer can transfer to buyer1.");
// //         //     await expect( () => poly.connect(deployer).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.changeTokenBalance( poly, buyer1, ethers.utils.parseUnits( String( 250000000 ), "ether" ) );
            
// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming deployer can transfer to buyer1.");
// //         //     await expect( () => poly.connect(deployer).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.changeTokenBalance( poly, buyer2, ethers.utils.parseUnits( String( 250000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: deployer balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(deployer.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 500000000 ), "ether" ) ) );
              
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
// //         //     expect( await poly.connect(buyer1).balanceOf(buyer1.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
// //         //     expect( await poly.connect(buyer2).balanceOf(buyer2.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //   }
// //         // );

// //         // it( 
// //         //   "Approved Seller Transfer", 
// //         //   async function() {

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller(deployer.address) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: poly is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller(poly.address) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( ethers.constants.AddressZero ) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( buyer1.address ) ).to.equal( false );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( buyer2.address ) ).to.equal( false );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: totalSupply.");
// //         //     expect( await poly.totalSupply() ).to.equal( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(deployer.address) ).to.equal( String( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer1.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer2.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: Approve buyer1 to sell.");
// //         //     expect( await poly.connect(deployer).addApprovedSeller(buyer1.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //     /*************************************************************************** */
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: Confirm seller approval required.");
// //         //     expect( await poly.requireSellerApproval() ).to.equal( true );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer1 can't transfer to buyer1 because they have no balance.");
// //         //     await expect( poly.connect(buyer1).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnershi::Minting: Confirming buyer1 can't transfer to buyer2 because they have no balance.");
// //         //     await expect( poly.connect(buyer1).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer2 can't transfer to buyer1 because they have no balance.");
// //         //     await expect( poly.connect(buyer2).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer2 can't transfer to buyer2 because they have no balance.");
// //         //     await expect( poly.connect(buyer2).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming deployer can transfer to buyer1.");
// //         //     await expect( () => poly.connect(deployer).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.changeTokenBalance( poly, buyer1, ethers.utils.parseUnits( String( 250000000 ), "ether" ) );
            
// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming deployer can transfer to buyer1.");
// //         //     await expect( () => poly.connect(deployer).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.changeTokenBalance( poly, buyer2, ethers.utils.parseUnits( String( 250000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: deployer balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(deployer.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 500000000 ), "ether" ) ) );
              
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
// //         //     expect( await poly.connect(buyer1).balanceOf(buyer1.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
// //         //     expect( await poly.connect(buyer2).balanceOf(buyer2.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Enable open trading of pOLY.");
// //         //     await poly.connect( deployer ).allowOpenTrading();

            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: Confirm seller approval required.");
// //         //     expect( await poly.requireSellerApproval() ).to.equal( false );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: only owner can mint.");

// //         //     expect( await poly.connect(buyer1).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //     // Don't know why this doesn't work.
// //         //     // await expect( () => poly.connect(buyer1).transfer( buyer2.address, poly.connect(deployer).balanceOf(buyer1.address) ) )
// //         //     //   .to.changeTokenBalance( poly, buyer1, ethers.utils.parseUnits( String( 0 ), "ether" ) )
// //         //     //   .to.changeTokenBalance( poly, buyer2, ethers.utils.parseUnits( String( 500000000 ), "ether" ) );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer1.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer2.address) ).to.equal( String( ethers.utils.parseUnits( String( 500000000 ), "ether" ) ) );
// //         //   }
// //         // );

// //         // it( 
// //         //   "Open Transfer", 
// //         //   async function() {

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller(deployer.address) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: poly is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller(poly.address) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( ethers.constants.AddressZero ) ).to.equal( true );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( buyer1.address ) ).to.equal( false );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: address(0) is approvedSeller.");
// //         //     expect( await poly.isApprovedSeller( buyer2.address ) ).to.equal( false );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: totalSupply.");
// //         //     expect( await poly.totalSupply() ).to.equal( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: owner balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(deployer.address) ).to.equal( String( ethers.utils.parseUnits( String( 1000000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer1.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer2.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: Confirm seller approval required.");
// //         //     expect( await poly.requireSellerApproval() ).to.equal( true );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer1 can't transfer to buyer1 because they have no balance.");
// //         //     await expect( poly.connect(buyer1).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnershi::Minting: Confirming buyer1 can't transfer to buyer2 because they have no balance.");
// //         //     await expect( poly.connect(buyer1).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer2 can't transfer to buyer1 because they have no balance.");
// //         //     await expect( poly.connect(buyer2).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming buyer2 can't transfer to buyer2 because they have no balance.");
// //         //     await expect( poly.connect(buyer2).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.be.revertedWith( "Account not approved to trans pOLY." );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming deployer can transfer to buyer1.");
// //         //     await expect( () => poly.connect(deployer).transfer( buyer1.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.changeTokenBalance( poly, buyer1, ethers.utils.parseUnits( String( 250000000 ), "ether" ) );
            
// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Confirming deployer can transfer to buyer1.");
// //         //     await expect( () => poly.connect(deployer).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) )
// //         //       .to.changeTokenBalance( poly, buyer2, ethers.utils.parseUnits( String( 250000000 ), "ether" ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: deployer balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(deployer.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 500000000 ), "ether" ) ) );
              
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
// //         //     expect( await poly.connect(buyer1).balanceOf(buyer1.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
// //         //     expect( await poly.connect(buyer2).balanceOf(buyer2.address) )
// //         //       .to.equal( String( ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: Enable open trading of pOLY.");
// //         //     await poly.connect( deployer ).allowOpenTrading();

            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: Confirm seller approval required.");
// //         //     expect( await poly.requireSellerApproval() ).to.equal( false );

// //         //     console.log("Test::PreTelestoTokenOwnership::Minting: only owner can mint.");

// //         //     expect( await poly.connect(buyer1).transfer( buyer2.address, ethers.utils.parseUnits( String( 250000000 ), "ether" ) ) );

// //         //     // Don't know why this doesn't work.
// //         //     // await expect( () => poly.connect(buyer1).transfer( buyer2.address, poly.connect(deployer).balanceOf(buyer1.address) ) )
// //         //     //   .to.changeTokenBalance( poly, buyer1, ethers.utils.parseUnits( String( 0 ), "ether" ) )
// //         //     //   .to.changeTokenBalance( poly, buyer2, ethers.utils.parseUnits( String( 500000000 ), "ether" ) );
            
// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer1 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer1.address) ).to.equal( String( ethers.utils.parseUnits( String( 0 ), "ether" ) ) );

// //         //     console.log("Test::PreTelestoTokenDeployment::DeploymentSuccess: buyer2 balanceOf.");
// //         //     expect( await poly.connect(deployer).balanceOf(buyer2.address) ).to.equal( String( ethers.utils.parseUnits( String( 500000000 ), "ether" ) ) );
// //         //   }
// //         // );
// //       }
// //     );
//   }
// );