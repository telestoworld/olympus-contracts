const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);

    const TELO = "0x9B64F9Be1C457dDDb24D7653a6186d14d332571f";
    const CEURO = "0x74C422a2D64dc0f68b80DFC10Ba06e92058F14AA";
    const Treasury = "0x792C37e5E135A4a643796d17e4C1D8De1cf59E0f";
    const DAO = "0x1fF807aDa4DDCc0638B0681A557E9C2582678a03";

    const policy = "0x5ffd586734959F5B61A276224F47Ae243A7C1ffE"

    // Get contract factory for CVX bond
    const CVXBond = await ethers.getContractFactory('TelestoCVXBondDepository');

    // Deploy CVX bond
    const cvxBond = await CVXBond.deploy(TELO, CEURO, Treasury, DAO);

    await cvxBond.pushManagement(policy);

    console.log("Bond CEURO " + cvxBond.address);
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })