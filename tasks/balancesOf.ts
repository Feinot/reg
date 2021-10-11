
import { task } from 'hardhat/config'

task('balanceOf')
    .addParam('note')
	.setAction(async ({ note }, { ethers }) => {
		let owner = "0x4e555E396e58D8dDF90a83dd3AcD52a266BeaAEd"
		
		const contract = await ethers.getContractAt('ERC20', note)
        
		let peremennaya = await contract.balancesOf(owner)

		console.log(peremennaya.toString())
	})

