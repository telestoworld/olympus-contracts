const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);
    // Get contract factory for CVX bond
    const Helper = await ethers.getContractFactory('RedeemHelper');

    // Deploy CVX bond
    const helper = await Helper.deploy();

    console.log("RedeemHelper: " + helper.address);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })