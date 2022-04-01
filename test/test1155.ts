import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { MyERC1155__factory, MyERC1155 } from "../typechain";

describe("Greeter", function () {
  const uri = "http://185.188.183.104:8080/game/";

  let myERC1155: MyERC1155;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  beforeEach(async function() {
    [owner, addr1] = await ethers.getSigners();

    const simpleTokenContractFactory = (await ethers.getContractFactory(
      "MyERC1155",
      owner
    )) as MyERC1155__factory;

    myERC1155 = await simpleTokenContractFactory.deploy(uri);
    await myERC1155.deployed();
  });

  it("check tokenURI after mint", async function() {
    for (let i = 1; i < 13; i++) {
      await myERC1155.mint(i);
    }
    const index = Math.floor((Math.random() * 12) + 1);
    expect(await myERC1155.uri(index)).to.equal(uri + index);
  });
});
