# Simple ERC20

1. Copy the `.env.example` file to `.env` and set the variables.
2. Run `yarn` to install the dependencies.
3. Run `npx hardhat compile` to compile the contracts.
4. Run `npx hardhat ./scripts/deploy.js --network sepolia` to deploy the contract.
5. Run `npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS` to verify the contract on Etherscan.
