const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);   
  const uri_ = ""
  const ccipRouterAddress = "0xF694E193200268f9a4868e4Aa017A0118C9a8177"
  const linkTokenAddress = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846"
  const currentChainSelector = BigInt(14767482510784806043)
  const functionsRouterAddress = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0"

  // Replace "YourContract" with the actual name of your contract
  const RealEstateToken = await ethers.getContractFactory("RealEstateToken");
  const contract = await RealEstateToken.deploy(uri_, ccipRouterAddress, linkTokenAddress, currentChainSelector, functionsRouterAddress);
  await contract.waitForDeployment();

  console.log("Contract    deployed to:", contract);
  //0xc6934e38017579e5Ab6a01a31D297C398C882F87
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);   
  });
