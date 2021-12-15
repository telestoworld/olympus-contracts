const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);
    // Get contract factory for CVX bond
    const WrappedTelo = await ethers.getContractFactory('wTELO');
    // Deploy CVX bond
    const wrappedTelo = await WrappedTelo.deploy("0x0be24afDA20209FDe1d71C280AcB2E82150d0B6C", "0x5380C0aEDbc84dE7eC4968d650038bC22431643B", "0x3fbE106d29493D0B93CaF70910a05b00d4649612");

    console.log("Wrapped Telo: " + wrappedTelo.address);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })