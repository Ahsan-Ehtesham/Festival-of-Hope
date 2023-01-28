// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";        

contract FruitFestival is ERC721 {
    // Declare a mapping to store the token IDs and their owners
    mapping(uint256 => address) public tokenOwners;

    // Event to track token ownership changes
    event TokenOwnershipTransferred(address indexed from, address indexed to, uint256 tokenId);

    // Function to mint new tokens
    function mint(address to, uint256 tokenId) public {
        require(msg.sender == address(this)); // Only the contract owner can mint new tokens
        require(tokenOwners[tokenId] == address(0)); // Ensure that the token ID is not already in use
        tokenOwners[tokenId] = to;
        emit TokenOwnershipTransferred(address(0), to, tokenId);
    }

    // Function to transfer ownership of a token
    function transferFrom(address from, address to, uint256 tokenId) public {
        require(from == tokenOwners[tokenId]); // Ensure that the msg.sender is the current owner
        require(to != address(0)); // Ensure that the to address is not the null address
        tokenOwners[tokenId] = to;
        emit TokenOwnershipTransferred(from, to, tokenId);
    }

    // Function to get the owner of a token
    function ownerOf(uint256 tokenId) public view returns (address) {
        return tokenOwners[tokenId];
    }

    // Function to check if an address owns a token
    function isApprovedOrOwner(address addr, uint256 tokenId) public view returns (bool) {
        return addr == ownerOf(tokenId);
    }
}
