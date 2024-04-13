// importing the block.js file 
Block =require('./block');
// importing the cryptos_hash.js file
hashValue=require('./crypto_hash');
class Blockchain{
    constructor(){
        this.chain=[Block.getGenesisBlock()];
    }
    // adding block into the chain
    addBlock({data}) {
        const newBlock=Block.mineBlock({
            prevBlock:this.chain[this.chain.length-1],
            data,
     });
        this.chain.push(newBlock);
    }
    // raplace chain and accept those chain which is longer the current chain
    replaceChain(chain){
        if(chain<this.chain.length){
            console.error("This Chain in no longer than the current chain");
            return;
        }
        if(!Blockchain.isValidBlockChain(chain)){
            console.error("This Chain is Not Valid");
            return;
        }
        this.chain=chain;
    }
    // checking if the chain or block valid or not prevent from attacker
    static isValidBlockChain(chain){
        if(JSON.stringify(chain[0])!=JSON.stringify(Block.getGenesisBlock())){  // if first block of chain is not a genesis block of our chain
            return false;
        }
        // chain[0]!=Block.getGenesisBlock(): Will not work before they are different instance function(use this:JSON.stringify())
        for(let i=1;i<chain.length;i++){
            const {timestamp,prevHash,hash,difficulty,nonce,data}=chain[i];
            const lastHash=chain[i-1].hash;
            if(prevHash!==lastHash){
                return false;
            }
            if(hash!==hashValue(timestamp,prevHash,difficulty,nonce,data)){
                return false;
            }
        }
        return true;
    }
}

let blockchain=new Blockchain();
// validation of blockchain
const result=Blockchain.isValidBlockChain(blockchain.chain);
console.log(result);
blockchain.addBlock({data:'blockchain'});
console.log(blockchain);