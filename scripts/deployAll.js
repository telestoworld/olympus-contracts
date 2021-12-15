// @dev. This script will deploy this V1.1 of Telesto. It will deploy the whole ecosystem except for the LP tokens and their bonds. 
// This should be enough of a test environment to learn about and test implementations with the Telesto as of V1.1.
// Not that the every instance of the Treasury's function 'valueOf' has been changed to 'valueOfToken'... 
// This solidity function was conflicting w js object property name

const { ethers } = require("hardhat");

const UNISWAP_FACTORY_ADDRESS_ALFAJORES = "0x62d5b84bE28a183aBB507E125B384122D2C25fAE"
const UNISWAP_FACTORY_ADDRESS = UNISWAP_FACTORY_ADDRESS_ALFAJORES

async function main() {



    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);
    const MockDAO = deployer;
    // Initial staking index
    const initialIndex = '7675210820';

    // First block epoch occurs
    const firstEpochBlock = '8961000';

    // What epoch will be first epoch
    const firstEpochNumber = '338';

    // How many blocks are in each epoch
    const epochLengthInBlocks = '2200';

    // Initial reward rate for epoch
    const initialRewardRate = '3000';

    // Ethereum 0 address, used when toggling changes in treasury
    const zeroAddress = '0x0000000000000000000000000000000000000000';

    // Large number for approval for CEuro and CUSD
    const largeApproval = '100000000000000000000000000000000';

    // Initial mint for CEuro and CUSD (10,000,000)
    const initialMint = '10000000000000000000000000';

    // CUSD bond BCV
    const cUsdBondBCV = '369';

    // CEuro bond BCV
    const cEuroBondBCV = '690';

    // Bond vesting length in blocks. 33110 ~ 5 days
    const bondVestingLength = '33110';

    // Min bond price
    const minBondPrice = '50000';

    // Max bond payout
    const maxBondPayout = '50'

    // DAO fee for bond
    const bondFee = '10000';

    // Max debt bond can take on
    const maxBondDebt = '1000000000000000';

    // Initial Bond debt
    const intialBondDebt = '0'

    // Deploy TELO
    const TELO = await ethers.getContractFactory('TelestoERC20Token');
    const telo = await TELO.deploy();
    console.log("Deployed Telesto ERC20 to address:",telo.address)
    // Deploy CUSD
    const CUSD = await ethers.getContractFactory('CUSD');
    const cUsd = await CUSD.deploy();
    console.log("Deployed Celo USD to address:",cUsd.address)

    // Deploy CEuro
    const CEuro = await ethers.getContractFactory('CEUR');
    const cEuro = await CEuro.deploy();
    console.log("Deployed CELO EURO to address:",cEuro.address)

    // Deploy CMC02
    const CMCO2 = await ethers.getContractFactory('CMCO2');
    const cMCO2 = await CMCO2.deploy();
    console.log("Deployed CELO MCO2 to address:",cMCO2.address)

    const Uniswap = await ethers.getContractFactory('MockUniswapV2Factory');
    const uniswap = Uniswap.connect(deployer);
    const instance=uniswap.attach(UNISWAP_FACTORY_ADDRESS_ALFAJORES);
    const res=await instance.createPair(cUsd.address,telo.address)
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(50000);
    const telocUSDPair = await instance.callStatic.getPair(cUsd.address,telo.address)


    // Deploy 10,000,000 mock CUSD and mock CEuro
    await cUsd.mint(deployer.address, initialMint);
    console.log("MONEY PRINTER GO BRRRR PRINTED CUSD TO YOUR ADDRESS :", initialMint)

    await cEuro.mint(deployer.address, initialMint);
    console.log("Le Moneys GO Le BRRRR PRINTED CEURO TO YOUR ADDRESS :", initialMint)

    await cMCO2.mint(deployer.address, initialMint);
    console.log("MANY MUCH CARBON CREDITS (For Your HEALTH!) at ADDRESS :", initialMint)

    // Deploy treasury
    //@dev changed function in treaury from 'valueOf' to 'valueOfToken'... solidity function was coflicting w js object property name
    const Treasury = await ethers.getContractFactory('TelestoTreasury');

    const treasury = await Treasury.deploy(telo.address, cUsd.address, cEuro.address,telocUSDPair,0);
    console.log("Deployed Treasury :")


    // Deploy bonding calc
    const TelestoBondingCalculator = await ethers.getContractFactory('TelestoBondingCalculator');
    const telestoBondingCalculator = await TelestoBondingCalculator.deploy(telo.address);
    console.log("Deployed Bonding Calculator ")

    // Deploy staking distributor
    const Distributor = await ethers.getContractFactory('Distributor');
    const distributor = await Distributor.deploy(treasury.address, telo.address, epochLengthInBlocks, firstEpochBlock);
    console.log("Deployed Distributor :", distributor.address)

    // Deploy sTELO
    const STELO = await ethers.getContractFactory('sTelesto');
    const sTELO = await STELO.deploy();
    console.log("Deployed Staked Telesto :", sTELO.address)

    // Deploy Staking
    const Staking = await ethers.getContractFactory('TelestoStaking');
    const staking = await Staking.deploy(telo.address, sTELO.address, epochLengthInBlocks, firstEpochNumber, firstEpochBlock);
    console.log("Deployed TelestoStaking :", staking.address)

    // Deploy staking warmpup
    const StakingWarmpup = await ethers.getContractFactory('StakingWarmup');
    const stakingWarmup = await StakingWarmpup.deploy(staking.address, sTELO.address);
    console.log("Deployed StakingWarmup :", stakingWarmup.address)

    console.log("starting to deploy stakingHelper with params:", staking.address,telo.address)
    // Deploy staking helper
    const StakingHelper = await ethers.getContractFactory('StakingHelper');
    const stakingHelper = await StakingHelper.deploy(staking.address, telo.address);
    console.log("Deployed stakingHelper :", stakingHelper.address)

    // // Deploy CUSD bond
    // //@dev changed function call to Treasury of 'valueOf' to 'valueOfToken' in BondDepository due to change in Treausry contract
    // const CUSDBond = await ethers.getContractFactory('DynamicTelestoBondDepository');
    // const cUsdBond = await CUSDBond.deploy(telo.address, cUsd.address, treasury.address, MockDAO.address, zeroAddress);

    //     // Deploy CUSD bond
    // //@dev changed function call to Treasury of 'valueOf' to 'valueOfToken' in BondDepository due to change in Treausry contract
    // const CMCO2Bond = await ethers.getContractFactory('DynamicTelestoBondDepository');
    // const cMCO2Bond = await CMCO2Bond.deploy(telo.address, cMCO2.address, treasury.address, MockDAO.address, zeroAddress);

    // // Deploy CEuro bond
    // //@dev changed function call to Treasury of 'valueOf' to 'valueOfToken' in BondDepository due to change in Treausry contract
    // const CEuroBond = await ethers.getContractFactory('DynamicTelestoBondDepository');
    // const cEuroBond = await CEuroBond.deploy(telo.address, cEuro.address, treasury.address, MockDAO.address, zeroAddress);

    // // queue and toggle CUSD and CEuro bond reserve depositor
    // await treasury.queue('0', cUsdBond.address);
    // await treasury.toggle('0', cUsdBond.address, zeroAddress);

    // await treasury.queue('0', cEuroBond.address);
    // await treasury.toggle('0', cEuroBond.address, zeroAddress);

    // await treasury.queue('0', cMCO2Bond.address);
    // await treasury.toggle('0', cMCO2Bond.address, zeroAddress);

    // // Set CUSD and CEuro bond terms
    // await cUsdBond.initializeBondTerms(cUsdBondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);
    // await cEuroBond.initializeBondTerms(cEuroBondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);

    // // Set staking for CUSD and CEuro bond
    // await cUsdBond.setStaking(staking.address, stakingHelper.address);
    // await cEuroBond.setStaking(staking.address, stakingHelper.address);

    // Initialize sTELO and set the index
    // await sTELO.initialize(staking.address);
    // await sTELO.setIndex(initialIndex);

    // // set distributor contract and warmup contract
    // await staking.setContract('0', distributor.address);
    // await staking.setContract('1', stakingWarmup.address);

    // Set treasury for TELO token
    // await telo.setVault(treasury.address);

    // // Add staking contract as distributor recipient
    // await distributor.addRecipient(staking.address, initialRewardRate);

    // // queue and toggle reward manager
    // await treasury.queue('8', distributor.address);
    // await treasury.toggle('8', distributor.address, zeroAddress);

    // // queue and toggle deployer reserve depositor
    // await treasury.queue('0', deployer.address);
    // await treasury.toggle('0', deployer.address, zeroAddress);

    // queue and toggle liquidity depositor
    // await treasury.queue('4', deployer.address,);
    // await treasury.toggle('4', deployer.address, zeroAddress);

    // // Approve the treasury to spend CUSD and CEuro
    // await cUsd.approve(treasury.address, largeApproval);
    // await cEuro.approve(treasury.address, largeApproval);
    // await cMCO2.approve(treasury.address, largeApproval);

    // Approve cUsd and cEuro bonds to spend deployer's CUSD and CEuro
    // await cUsd.approve(cUsdBond.address, largeApproval);
    // await cEuro.approve(cEuroBond.address, largeApproval);
    // await cMCO2.approve(cMCO2Bond.address, largeApproval);

    // Approve staking and staking helper contact to spend deployer's TELO
    // await telo.approve(staking.address, largeApproval);
    // await telo.approve(stakingHelper.address, largeApproval);

    // // Deposit 9,000,000 CUSD to treasury, 600,000 TELO gets minted to deployer and 8,400,000 are in treasury as excesss reserves
    // await treasury.deposit('9000000000000000000000000', cUsd.address, '8400000000000000');

    // // Deposit 5,000,000 CEuro to treasury, all is profit and goes as excess reserves
    // await treasury.deposit('5000000000000000000000000', cEuro.address, '5000000000000000');
    // // Deposit 5,000,000 CEuro to treasury, all is profit and goes as excess reserves
    // await treasury.deposit('5000000000000000000000000', cMCO2.address, '5000000000000000');

    // Stake TELO through helper
    // await stakingHelper.stake('100000000000');

    // Bond 1,000 TELO and CEuro in each of their bonds
    // await cUsdBond.deposit('1000000000000000000000', '60000', deployer.address);
    // await cEuroBond.deposit('1000000000000000000000', '60000', deployer.address);
    // await cMCO2Bond.deposit('1000000000000000000000', '60000', deployer.address);

    console.log("TELO: " + telo.address);
    console.log("CUSD: " + cUsd.address);
    console.log("CEuro: " + cEuro.address);
    console.log("Treasury: " + treasury.address);
    console.log("Calc: " + telestoBondingCalculator.address);
    console.log("Staking: " + staking.address);
    console.log("sTELO: " + sTELO.address);
    console.log("Distributor " + distributor.address);
    console.log("Staking Wawrmup " + stakingWarmup.address);
    console.log("Staking Helper " + stakingHelper.address);
    // console.log("CUSD Bond: " + cUsdBond.address);
    // console.log("CEuro Bond: " + cEuroBond.address);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })