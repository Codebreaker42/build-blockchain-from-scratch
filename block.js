


class Block{
    constructor({_timestamp,_prevHash,_hash,_data}){
        this.timestamp=_timestamp;
        this.prevHash=_prevHash;
        this.hash=_hash;
        this.data=_data;
    }
}

// creating object
const block1=new Block({
  _timestamp: "12/09/2024",
  _prevHash:"0x123",
  _hash:"0x456",
  _data:"block"
});

const block2=new Block({ // order doesn't matter because we passing the objects 
  _timestamp:"13/09/2024",
  _hash:"0x789",
  _prevHash:"0x456",
  _data:"chain"
});

console.log(block1);
console.log(block2);