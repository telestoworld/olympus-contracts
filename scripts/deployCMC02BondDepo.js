const { ethers } = require("hardhat");

const bondInfo = {
    TELO : "0x5380C0aEDbc84dE7eC4968d650038bC22431643B",
    CMC02 : "0xF8cB093DDE6501c84d30711e050eA744Bb85BB61",
    Treasury : "0x8dA432538f58EA8423c6D7DE783D113d6301b4FA",
    DAO : "0xCc879Ab4DE63FC7Be6aAca522285D6F5d816278e"
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
    const policy = "0x90341A01192b4B1014e66f8a370F5DD7042BcEe2" //distributor

    // Get contract factory for CVX bond
    const CMC02Bond = await ethers.getContractFactory('DynamicTelestoBondDepository');

    // Deploy CVX bond
    const cmc02Bond = await CMC02Bond.deploy(TELO, CMC02, Treasury, DAO,"0x0000000000000000000000000000000000000000");

    await cmc02Bond.pushManagement(policy);

    console.log("CMC02 Bond: " + cmc02Bond.address);
    await cmc02Bond.initializeBondTerms(cMC02BondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);

    await cmc02Bond.setStaking("0x0be24afDA20209FDe1d71C280AcB2E82150d0B6C", "0x96a7639daf07De63fe18dc9DD5854436526d775A");

}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})