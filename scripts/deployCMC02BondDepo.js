const { ethers } = require("hardhat");

const bondInfo = {
    TELO : "0x383518188c0c6d7730d91b2c03a03c837814a899",
    CMC02 : "0xFEfb18f20C7548b72FDdBe4b70d07ee2ab63F60E",
    Treasury : "0x31F8Cc382c9898b273eff4e0b7626a6987C846E8",
    DAO : "0x245cc372C84B3645Bf0Ffe6538620B04a217988B"
}


async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);


    const {TELO,CMC02,DAO,Treasury}=bondInfo
    
    // CMC02 bond BCV
    const cMC02BondBCV = '420';

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
    const policy = "0x5ffd586734959F5B61A276224F47Ae243A7C1ffE"

    // Get contract factory for CVX bond
    const CMC02Bond = await ethers.getContractFactory('StandardTelestoBondDepository');

    // Deploy CVX bond
    const cmc02Bond = await CMC02Bond.deploy(TELO, CMC02, Treasury, DAO,"0x0000000000000000000000000000000000000000");

    await cmc02Bond.pushManagement(policy);

    console.log("CMC02 Bond: " + cmc02Bond.address);
    await cmc02Bond.initializeBondTerms(cMC02BondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);

    // Set staking for CUSD and CEuro bond
    await cmc02Bond.setStaking("0x417Bcb70d52F3ABeec13A22B07616a76C11493d4", "0x96a7639daf07De63fe18dc9DD5854436526d775A");

}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})