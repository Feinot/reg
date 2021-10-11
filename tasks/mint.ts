
import { task } from 'hardhat/config'

task('mint')
    .addParam('note')
	.setAction(async ({ note }, { ethers }) => {
		let to = "0x4e555E396e58D8dDF90a83dd3AcD52a266BeaAEd"
		let value = 1
		const contract = await ethers.getContractAt('ERC20', note)
		await contract.mint(to,value)
		console.log("mint")
	})

