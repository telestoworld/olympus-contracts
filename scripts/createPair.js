// @dev. This script will deploy this V1.1 of Telesto. It will deploy the whole ecosystem except for the LP tokens and their bonds. 
// This should be enough of a test environment to learn about and test implementations with the Telesto as of V1.1.
// Not that the every instance of the Treasury's function 'valueOf' has been changed to 'valueOfToken'... 
// This solidity function was conflicting w js object property name

const { ethers } = require("hardhat");

const UNISWAP_FACTORY_ADDRESS_ALFAJORES = "0x62d5b84bE28a183aBB507E125B384122D2C25fAE"

async function main() {



    const [deployer] = await ethers.getSigners();
    const TELO = await ethers.getContractFactory('TelestoERC20Token');
    const telo = await TELO.deploy();
    const CUSD = await ethers.getContractFactory('CUSD');
    const cUsd = await CUSD.deploy();
    console.log(cUsd.address);
    console.log(telo.address);
    const Uniswap = await ethers.getContractFactory('MockUniswapV2Factory');
    const uniswap = Uniswap.connect(deployer);
    const instance=uniswap.attach(UNISWAP_FACTORY_ADDRESS_ALFAJORES);
    const res=await instance.createPair(cUsd.address,telo.address)
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(50000);
    const telocUSDPair = await instance.callStatic.getPair(cUsd.address,telo.address)
    console.log("Pair created at",telocUSDPair,res)
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })