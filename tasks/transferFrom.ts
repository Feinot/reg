
import { task } from 'hardhat/config'

task('transferFrom')
    .addParam('note')
	.setAction(async ({ note }, { ethers }) => {
		let _to = "0x4e555E396e58D8dDF90a83dd3AcD52a266BeaAEd"
        let _from = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199"
		let _value = 1
		const contract = await ethers.getContractAt('ERC20', note)
		await contract.transferFrom(_to,_from,_value)
		console.log("transferFrom")
	})

