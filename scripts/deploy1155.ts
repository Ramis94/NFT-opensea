import { ethers } from "hardhat";

async function main() {
  const MyERC1155 = await ethers.getContractFactory("MyERC1155");
  const token = await MyERC1155.deploy("http://185.188.183.104:8080/game/");

  await token.deployed();

  console.log("QwertyTest1155 deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
