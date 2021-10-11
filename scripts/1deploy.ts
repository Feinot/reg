// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat"
import { ERC20 } from '../typechain/ERC20';

async function main() {
   
  const [deployer] = await ethers.getSigners();

  const ERC20 = await ethers.getContractFactory("ERC20");
  console.log("Deploying the ERC20...")

  const erc20 = await ERC20.deploy();
  await erc20.deployed();
  console.log("ERC20 deployed to: ", erc20.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });