

import { task } from 'hardhat/config'

task('approve')
    .addParam('note')
	.setAction(async ({ note }, { ethers }) => {
		let owner = "0x4e555E396e58D8dDF90a83dd3AcD52a266BeaAEd"
		let spender= 2
		const contract = await ethers.getContractAt('ERC20', note)
		await contract.approve(owner,spender)
		console.log("approve")
	})

