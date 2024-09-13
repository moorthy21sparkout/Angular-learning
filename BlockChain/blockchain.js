//We use Node.js’s built-in crypto module to create hashes
// both or same import { createHash } from "crypto";
const crypto = require("crypto");

class Block {
  /**
   *
   * @param {*} index  position of the black to chain
   * @param {*} previoushash  hash of the previous hash
   * @param {*} timestamp when was block was create
   * @param {*} date date contained the block
   * @param {*} hash hash of  the current block
   */
  constructor(index, previoushash, timestamp, data, hash) {
    this.index = index;
    this.previoushash = previoushash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
  }
}

/**
 *
 * @param {*} index
 * @param {*} previoushash
 * @param {*} timestamp
 * @param {*} date
 * @returns
 * index + previousHash + timestamp + data: Concatenates these values into a string.
 * .digest('hex'): Outputs the hash as a hexadecimal string.
 * Why SHA-256 is Used in Blockchain
 * Security: SHA-256 is designed to be a one-way function, meaning it is computationally infeasible to reverse the hash to obtain the original input data. 
 * This helps secure the data in each block.
 * SHA-256 is a crucial component of blockchain technology for maintaining data integrity and security.
 */
function calculateHash(index, previoushash, timestamp, data) {
  return crypto
    .createHash("sha256") // Create a SHA-256 hash instance
    .update(index + timestamp + data+ previoushash)
    .digest("hex"); // Output the hash as a hexadecimal string
}

function createNewBlock(index, previousBlock, data) {
    const timestamp = new Date().toISOString();
    const previousHash = previousBlock.hash; // Use previous block's hash
    const hash = calculateHash(index, previousHash, timestamp, data);
    return new Block(index, previousHash, timestamp, data, hash); // Include hash in the new block
  }

const genesisBlock = new Block(
  0, //index value 
  "0",//previous hash value
  new Date().toISOString(),//timestamps
  "information",//data
  calculateHash(0, "0", new Date().toISOString(), "Genesis Block")
);

console.log("Genesis Block:");
console.log(genesisBlock);


const newBlock1 = createNewBlock(1, genesisBlock, "Info");
console.log("Prosonal info");
console.log(newBlock1);

const newBlock2 = createNewBlock(2, newBlock1, "firstname:Meignana");
console.log("First Name");
console.log(newBlock2);


const newBlock3 = createNewBlock (3,newBlock2,"last Name : Moorthy")
console.log("Last Name");
console.log(newBlock3);

const address = createNewBlock(4,newBlock3 ,"3/73-ganapathypalayam,mangalam,Tirupur")
console.log("address");
console.log(address);




/**
 * sequire Hash Algoritham
 * this si the family for crypto grapich family functionalaty
 * SHA-1: Produces a 160-bit hash value, typically rendered as a 40-digit hexadecimal number.
 * SHA-256: Part of the SHA-2 family, it produces a 256-bit hash value, typically rendered as a 64-digit hexadecimal number.
 * SHA-512: Also part of the SHA-2 family, it produces a 512-bit hash value, typically rendered as a 128-digit hexadecimal number.
 * SHA-3: The latest member of the Secure Hash Algorithm family, it offers different output sizes like 224, 256, 384, and 512 bits.
 */