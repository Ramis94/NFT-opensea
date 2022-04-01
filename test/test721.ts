import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { MyERC721__factory, MyERC721 } from "../typechain";

describe("Greeter", function () {
  let myERC721: MyERC721;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;

  beforeEach(async function() {
    [owner, addr1] = await ethers.getSigners();

    const simpleTokenContractFactory = (await ethers.getContractFactory(
      "MyERC721",
      owner
    )) as MyERC721__factory;
    myERC721 = await simpleTokenContractFactory.deploy("MyERC721", "QT721");
    await myERC721.deployed();
  });

  it("check tokenURI after mint", async function() {
    var message = "qwerty = ";
    for (let i = 1; i < 13; i++) {
      await myERC721.mint(message + i);
    }
    expect(await myERC721.balanceOf(owner.address)).to.equal(12);
    const index = Math.floor((Math.random() * 12) + 1);
    expect(await myERC721.tokenURI(index)).to.equal(message + index);
  });
});
