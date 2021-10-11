
import { task } from 'hardhat/config'

task('transfer')
    .addParam('note')
	.setAction(async ({ note }, { ethers }) => {
		let to = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199"
		let value = 1
		const contract = await ethers.getContractAt('ERC20', note)
		await contract.transfer(to,value)
		console.log("transfer")
	})

