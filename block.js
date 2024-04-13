// importing the genesis block 
const {GENESIS_DATA} = require('./config');
const hashValue = require('./crypto_hash');
// importing the hash value
const hash=require('./crypto_hash');
class Block{
    constructor(_timestamp, _prevHash, _hash, _data){
        this.timestamp = _timestamp;
        this.prevHash = _prevHash;
        this.hash = _hash;
        this.data = _data;
    }
    
    static getGenesisBlock(){
        return new this(GENESIS_DATA.timestamp, GENESIS_DATA.prevHash, GENESIS_DATA.hash, GENESIS_DATA.data);
    }

    //minning the block
    static mineBlock({prevBlock,data}){
        let timestamp=Date.now() // return the current timestamp
        let prevHash=prevBlock.hash;
        let hash=hashValue(timestamp,prevHash,data);
        return new this(
          timestamp,
          prevHash,
          hash,
          data,
      );
    }
}

// creating object
// const block1 = new Block("12/09/2024", "0x123", "0x456", "block");
// console.log(block1);

// const genesisBlock = Block.getGenesisBlock();
// console.log(genesisBlock);

// const result=Block.mineBlock({prevBlock:block1,data:'block2'});
// console.log(result);

module.exports=Block;