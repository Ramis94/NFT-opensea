pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MyERC1155 is ERC1155 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string private customUri;

    constructor(string memory uri) ERC1155(uri) {
        customUri = uri;
    }

    function mint(uint256 amount) public {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId, amount, '');
    }

    function uri(uint256 id) public override view returns(string memory){
        return string(abi.encodePacked(customUri, Strings.toString(id)));
    }
}
