// importing the genesis block 
const {GENESIS_DATA} = require('./config');
const hashValue = require('./crypto_hash');// importing the hash value
const hexToBinary=require('hex-to-binary'); // importing the predefine library to convert hex code into the binary numbers
const MINE_RATE=1000;
class Block{
    constructor(_timestamp, _prevHash, _hash, _data,_nonce,_difficulty){
        this.timestamp = _timestamp;
        this.prevHash = _prevHash;
        this.hash = _hash;
        this.data = _data;
        this.nonce= _nonce;
        this.difficulty= _difficulty;
    }
    
    static getGenesisBlock(){
        return new this(GENESIS_DATA.timestamp, GENESIS_DATA.prevHash, GENESIS_DATA.hash,GENESIS_DATA.data,GENESIS_DATA.nonce, GENESIS_DATA.difficulty);
    }

    //minning the block
    static mineBlock({prevBlock,data}){
        let hash,timestamp;
        let prevHash=prevBlock.hash;
        let {difficulty}=prevBlock;
        let nonce=0;
        do{
            nonce++;
            timestamp=Date.now();
            difficulty=Block.adjustDifficulty({originalBlock:prevBlock,timestamp})
            hash=hashValue(timestamp,prevHash,data,nonce,difficulty);
        }while(hexToBinary(hash).substring(0,difficulty)!=='0'.repeat(difficulty));
        // let hash=hashValue(timestamp,prevHash,data);
        return new this(
          timestamp,
          prevHash,
          hash,
          data,
          nonce,
          difficulty
      );
    }
    static adjustDifficulty({originalBlock,timestamp}){
        const {difficulty}=originalBlock;
        if(difficulty<1){
            return 1;
        } 
        if(timestamp-originalBlock.timestamp> MINE_RATE){
            return difficulty-1;
        }
        if(timestamp-originalBlock.timestamp<MINE_RATE){
            return difficulty+1;
        }
    }
}

// creating object
// const block1 = new Block("12/09/2024", "0x123", "0x456", "block");
// console.log(block1);
console.log('hi');
const genesisBlock = Block.getGenesisBlock();
// console.log(genesisBlock);
// const result=Block.mineBlock({prevBlock:block1,data:'block2'});
// console.log(result);

module.exports=Block;