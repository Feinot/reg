

import { Contract } from "ethers";

import { task } from 'hardhat/config'

task('allowance')
    .addParam('note')
	.setAction(async ({ note }, { ethers }) => {
		let owner = "0x4e555E396e58D8dDF90a83dd3AcD52a266BeaAEd"
		let spender= "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199"
		const contract = await ethers.getContractAt('ERC20', note)
		await contract.allowance(owner,spender)
		console.log("allowance")
	})

