const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);   

  const fractionalizedRealEstateTokenAddress = "0x24Faf922144d3B34f89B6812A3FD1a46F734D8d5"




  // Replace "YourContract" with the actual name of your contract
  const EnglishAuction = await ethers.getContractFactory("EnglishAuction");
  const contract = await EnglishAuction.deploy(fractionalizedRealEstateTokenAddress);
  await contract.waitForDeployment();

  console.log("Contract EnglishAuction  deployed to:", contract);
  //addres:: 0xc4a652263EB2B5f8eeC7a269b0D12C53Bc39eAcF
 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);   
  });
