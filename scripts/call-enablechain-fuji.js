const { ethers } = require("hardhat");

async function main() {
  // Replace with your contract's deployed address
  const contractAddress = "0x33ffd32a1506f791f5b71A1E22294590Bd4D3bA0";

  // Get the contract ABI (from the artifacts)
  const contractABI = require("../artifacts/contracts/RealEstateToken.sol/RealEstateToken.json").abi;



  // Get the signer (the account that will send the transaction)
  const [signer] = await ethers.getSigners();

  // Connect to the contract using the address, ABI, and signer
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const chainSelector = BigInt(14767482510784806043);
  const xNftAddress = "0x33ffd32a1506f791f5b71A1E22294590Bd4D3bA0";
  const ccipExtraArgs = "0x97a657c90000000000000000000000000000000000000000000000000000000000030d40";

  // Call the method (replace with your method name)
  const setAutomationForwarder = await contract.enableChain(chainSelector, xNftAddress, ccipExtraArgs);

  // Print the result to the console
  console.log("The setAutomationForwarder is:", setAutomationForwarder.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
