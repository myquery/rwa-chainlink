# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# rwa-chainlink

This project allows to deploy a Real World tokenized asset to fuji or any other chain using ERC1155 token standard that allows minting both NFT and FT token. this will allow fractionalize real world assets, distribute to holder and also deploy it to auction contract like the EnglishAuction.sol in this project in the use-cases folder

### you may want to use script file to deploy the contract, the main contract is the RealEstateToken.sol
```
npx hardhat run script/deploy.js --network fuji
```
### for other contract like Issuer.sol use
```
npx hardhat run script/deploy-2.js --network fuji
```

