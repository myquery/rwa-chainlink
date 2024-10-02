const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);   
  const uri_ = ""
  const realEstateToken = "0x24Faf922144d3B34f89B6812A3FD1a46F734D8d5"
  const functionsRouterAddress = "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0"

  // Replace "YourContract" with the actual name of your contract
  const RealEstateToken = await ethers.getContractFactory("Issuer");
  const contract = await RealEstateToken.deploy( realEstateToken, functionsRouterAddress);
  await contract.waitForDeployment();

  //alice addr = 0xcF574BB88199B94351CA5D26Fa1Ea206A7BACeE4

  console.log("Contract    deployed to:", contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);   
  });
