const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);
    // Get contract factory for CVX bond
    const WrappedTelo = await ethers.getContractFactory('wTELO');
    // Deploy CVX bond
    const wrappedTelo = await WrappedTelo.deploy("0x417Bcb70d52F3ABeec13A22B07616a76C11493d4", "0x9B64F9Be1C457dDDb24D7653a6186d14d332571f", "0x88EcF7e64A52A4fdac23AEdE4BEad4760096Cb00");

    console.log("Wrapped Telo: " + wrappedTelo.address);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })