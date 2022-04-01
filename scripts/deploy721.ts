import { ethers } from "hardhat";

async function main() {
  const MyERC721 = await ethers.getContractFactory("MyERC721");
  const token = await MyERC721.deploy("QwertyTest721", "QT721");

  await token.deployed();

  console.log("QwertyTest721 deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
