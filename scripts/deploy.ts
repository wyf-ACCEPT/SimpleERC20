import { ethers } from "hardhat"
import "dotenv/config"

async function main() {
  const contractName = "AgentToken"
  const contract = await deployContract(contractName)
  console.log(`\x1b[0m${contractName} deployed to: \x1b[32m${await contract.getAddress()}`)
}

async function deployContract(contractName: string) {
  const contractFactory = await ethers.getContractFactory(contractName)
  const contract = await contractFactory.deploy([])
  return contract
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
