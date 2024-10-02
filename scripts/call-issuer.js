const { ethers } = require("hardhat");

async function main() {
  // Replace with your contract's deployed address
  const contractAddress = "0x24Faf922144d3B34f89B6812A3FD1a46F734D8d5";

  // Get the contract ABI (from the artifacts)
  const contractABI = require("../artifacts/contracts/RealEstateToken.sol/RealEstateToken.json").abi;

  // Get the signer (the account that will send the transaction)
  const [signer] = await ethers.getSigners();

  // Connect to the contract using the address, ABI, and signer
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // Call the method (replace with your method name)
  const price = await contract.setIssuer("0xcF574BB88199B94351CA5D26Fa1Ea206A7BACeE4");

  // Print the result to the console
  console.log("The price is:", price.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
