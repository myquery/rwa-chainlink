const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("RealEstateTokenModule", (m) => {
  // Set up the parameters for the ERC-1155 contract
  const uri_ = m.getParameter("uri_", "");
  const ccipRouterAddress = m.getParameter("ccipRouterAddress", "0xF694E193200268f9a4868e4Aa017A0118C9a8177");
  const linkTokenAddress = m.getParameter("linkTokenAddress", "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846");
  const currentChainSelector = m.getParameter("currentChainSelector", 14767482510784806043);
  const functionsRouterAddress = m.getParameter("functionsRouterAddress", "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0");

  // Deploy the ERC-1155 contract with these specific parameters
  const realEstateTokenContract = m.contract("RealEstateToken", [
    uri_,
    ccipRouterAddress,
    linkTokenAddress,
    currentChainSelector,
    functionsRouterAddress
  ]);

  // Return the deployed contract
  return { realEstateTokenContract };
});
