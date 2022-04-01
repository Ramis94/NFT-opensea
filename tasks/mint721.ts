import { task } from "hardhat/config";

/*
Example:

npx hardhat --network rinkeby --show-stack-traces mint \
  --contract 0x2904439f72CDbF8886fE28fb97DCcc9244cF7c6d \
  --tokenuri ''

 */
task("mint721", "mint token")
  .addParam("contract", "The contract address")
  .addParam("tokenuri", "URI to json")
  .setAction(async (taskArgs, hre) => {
    const contract = await hre.ethers.getContractAt(
      "MyERC721",
      taskArgs.contract
    );

    console.log(await contract.mint(taskArgs.tokenuri));
  });
