const { ethers } = require("hardhat");

async function main() {
  // Replace with your contract's deployed address
  const contractAddress = "0xcF574BB88199B94351CA5D26Fa1Ea206A7BACeE4";

  // Get the contract ABI (from the artifacts)
  const contractABI = require("../artifacts/contracts/Issuer.sol/Issuer.json").abi;

  // Get the signer (the account that will send the transaction)
  const [signer] = await ethers.getSigners();

  // Connect to the contract using the address, ABI, and signer
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // Call the method (replace with your method name)
  const issues = await contract.issue("0x33ffd32a1506f791f5b71A1E22294590Bd4D3bA0", 20, 12978, 300000, "0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000");

  // Print the result to the console
  console.log("The price is:", issues.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
