const { ethers } = require("hardhat");

const bondInfo = {
    TELO: "0x5380C0aEDbc84dE7eC4968d650038bC22431643B",
    LIQUIDITY_POOL: "0xF8cB093DDE6501c84d30711e050eA744Bb85BB61",
    CALCULATOR: "0x21459bad1747d1edFb8a2a8bf085b4d44cfD1A30",
    TREASURY: "0x8dA432538f58EA8423c6D7DE783D113d6301b4FA",
    DAO: "0xCc879Ab4DE63FC7Be6aAca522285D6F5d816278e",
    STAKING: "0x0be24afDA20209FDe1d71C280AcB2E82150d0B6C",
    DISTRIBUTOR: "0x90341A01192b4B1014e66f8a370F5DD7042BcEe2",
    STAKING_HELPER: "0xf46aDB112f9819481412E20D5172B7dfe2bc9f9b"
}


async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);


    const { TELO, LIQUIDITY_POOL, DAO, TREASURY, STAKING,DISTRIBUTOR ,CALCULATOR,STAKING_HELPER} = bondInfo

    const Treasury = await ethers.getContractFactory('TelestoTreasury');
    const treasury = Treasury.connect(deployer,TREASURY);

    // // liquidity bond BCV
    // const liquidityBondBCV = '420';

    // // Bond vesting length in blocks. 33110 ~ 5 days
    // const bondVestingLength = '33110';

    // // Min bond price
    // const minBondPrice = '50000';

    // // Max bond payout
    // const maxBondPayout = '50'

    // // DAO fee for bond
    // const bondFee = '10000';

    // // Max debt bond can take on
    // const maxBondDebt = '1000000000000000';

    // // Initial Bond debt
    // const intialBondDebt = '0'
    // const policy = DISTRIBUTOR //distributor

    // // Get contract factory for CVX bond
    // const LiquidityBond = await ethers.getContractFactory('DynamicTelestoBondDepository');

    // // Deploy CVX bond
    // const liquidityBond = await LiquidityBond.deploy(TELO, LIQUIDITY_POOL, TREASURY, DAO, CALCULATOR);

    // await liquidityBond.pushManagement(policy);

    // console.log("liquidity Bond: " + liquidityBond.address);
    // await liquidityBond.initializeBondTerms(liquidityBondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);

    const BOND = await ethers.getContractFactory('DynamicTelestoBondDepository');
    const liquidityBond = BOND.connect(deployer,"0xa5FbdE41486fCB53A1C236aDc65430F0d7A62Bdc");
    await liquidityBond.setStaking(STAKING, STAKING_HELPER);
    await treasury.queue('0', liquidityBond.address);
    await treasury.toggle('0', liquidityBond.address, zeroAddress);

}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })