const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);
    // Get contract factory for CVX bond
    const CarbonCredits = await ethers.getContractFactory('CMC02');
    const carbonCredits = await CarbonCredits.deploy();
    console.log("C2M02: " + carbonCredits.address);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })