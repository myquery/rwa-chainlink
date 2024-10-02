const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);   

  const realEstateTokenAddress = "0x24Faf922144d3B34f89B6812A3FD1a46F734D8d5"
  const usdc = "0x5425890298aed601595a70AB815c96711a31Bc65"
  const usdcUsdAggregatorAddress = "0x97FE42a7E96640D932bbc0e1580c73E705A8EB73"
  const usdcUsdFeedHeartbeat = 86400


  // Replace "YourContract" with the actual name of your contract
  const RwaLending = await ethers.getContractFactory("RwaLending");
  const contract = await RwaLending.deploy(realEstateTokenAddress, usdc, usdcUsdAggregatorAddress, usdcUsdFeedHeartbeat);
  await contract.waitForDeployment();

  console.log("Contract    deployed to:", contract);
  //addres:: 0xD8c3C891190E672cCe7D44cb887F4Ea2919CC513
 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);   
  });
